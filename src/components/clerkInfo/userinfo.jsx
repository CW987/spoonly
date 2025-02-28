"use server";

import { useUser } from "@clerk/nextjs";

const clerkInfo = await useUser;

export const ClerkUser = { clerkInfo };
