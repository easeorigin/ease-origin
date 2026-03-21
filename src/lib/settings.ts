import { Setting } from "@/models/Settings";

export async function getSettings() {
  let settings = await Setting.findOne();

  if (!settings) {
    settings = await Setting.create({
      company: {
        name: "EaseOrigin LLC",
      },
      notifications: {
        newSubscriber: true,
        newResume: true,
        newJobApplication: true,
      },
    });
  }

  return settings;
}