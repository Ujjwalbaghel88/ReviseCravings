import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.config.js";

export const EditUserProfile = async (req, res, next) => {
    try {
        const { email, fullName, phone } = req.body;
        const newPhoto = req.file;

        console.log("Req Body :", req.body);
        console.log("Req File :", req.file);
        if (!email || !fullName || !phone) {
            const error = new Error("All fields Required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({ email: { $regex: email, $options: "i" } });
        if (!existingUser) {
            const error = new Error("Email not registred");
            error.statusCode = 404;
            return next(error);
        }

        // Update profile fields first
        existingUser.fullName = fullName;
        existingUser.phone = phone;

        // Handle photo - convert string to object if needed
        let photoData = existingUser.photo;
        if (typeof photoData === "string") {
            photoData = {
                url: photoData,
                publicId: null,
            };
        } else if (!photoData || typeof photoData !== "object") {
            photoData = {
                url: "https://placehold.co/600x400?text=User",
                publicId: null,
            };
        }

        // Upload new photo if provided
        if (newPhoto) {
            try {
                const b64 = Buffer.from(newPhoto.buffer).toString("base64");
                const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;

                const result = await cloudinary.uploader.upload(dataURI, {
                    folder: "Cravings678/profile",
                    width: 500,
                    height: 500,
                    crop: "fill",
                });

                console.log("Cloudinary Upload Result:", result);
                
                // Update photo with new URL and public ID
                photoData = {
                    url: result.secure_url,
                    publicId: result.public_id,
                };
            } catch (uploadError) {
                console.error("Cloudinary Upload Error:", uploadError.message);
                throw uploadError;
            }
        }

        // Set the photo object
        existingUser.photo = photoData;

        await existingUser.save();

        res
            .status(200)
            .json({ message: "User Updated Sucessfully", data: existingUser });
    } catch (error) {
        console.log("Error:", error.message);
        next(error);
    }
};