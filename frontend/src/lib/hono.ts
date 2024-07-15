import { hc } from "hono/client";
import type { AppType } from "@server/app";

const honoClient = hc<AppType>("/");

export const api = honoClient.api;
