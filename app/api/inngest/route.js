import { serve } from "inngest/next";
import {
  inngest,
  SyncUserCreation,
  syncUserDeletion,
  syncUserUpdate,
} from "@/config/inngest";

//Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [SyncUserCreation, syncUserUpdate, syncUserDeletion],
});
