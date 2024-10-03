import * as notificationItem from "../../notifications.json";

// Return the context of all notifications where the author is the user with the ID userId
export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context); // Return only the context of the notifications
};
