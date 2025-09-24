import "../processors/mailProcessor.js"

import mailQueue from "../queues/mailQueue.js";

export const addEmailtoMailQueue = async (emailData) => {
    console.log(`initialting email sending process`)
    try {
        await mailQueue.add(emailData);
        console.log(`Email added to the queue`)
    } catch (error) {
        console.log('Add email to mail queue error', error);
    }
}