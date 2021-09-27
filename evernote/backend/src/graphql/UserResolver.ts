import { User } from "../entity/User";
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { compare, hash } from 'bcryptjs';
import { generateAccessToken, generateRefreshToken } from "../helpers/generateToken";
import { Request, Response } from "express";
import { CONST } from "../constants/strings";

export interface MyContext {
    req: Request;
    res: Response;
}

@ObjectType()
class LoginResponse {
    @Field(() => String)
    access_token: string
}

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return "Hello World"
    }

    @Mutation(() => Boolean)
    async signup(
        @Arg("email") email: string,
        @Arg("password") password: string,
    ) {
        try {
            const findUser = await User.findOne({where: {email}})

            if(findUser) throw new Error("A user with that email already exists")

            await User.insert({
                email,
                password: await hash(password, 12),
                username: email.split("@")[0],
            })

            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    @Mutation(() => LoginResponse)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() { res }: MyContext
    ) {
        try {
            const user = await User.findOne()

            if(!user) throw new Error("A user with that email does not exist")

            const isPassword = await compare(password, user.password)
            
            if(!isPassword) throw new Error("Password is not valid")

            const accessToken = generateAccessToken(user)

            const refreshToken = generateRefreshToken(user)

            res.cookie(CONST.JWT_COOKIE, refreshToken, {
                httpOnly: true
            })

            return {
                access_token: accessToken
            }
        } catch (error) {
            console.log(error)
            return "There was an Error"
        }
    }
}