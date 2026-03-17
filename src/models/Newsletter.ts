import { Schema, model, models } from "mongoose";


const NewsletterSchema = new Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});


const Newsletter = models.Newsletter || model("Newsletter", NewsletterSchema);

export default Newsletter;