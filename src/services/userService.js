import userRepository from "../repositories/userRepository"

export const signUpService = async (data) => {
    try {
        const newUser = await userRepository.create(data);
        return newUser;
    } catch (error) {
        console.log(`User Service error`, error);
        if (error.name === 'ValidationError') {
            
        }
    }
}