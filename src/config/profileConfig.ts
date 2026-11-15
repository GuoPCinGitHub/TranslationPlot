import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "糸见纱希",
	bio: "Just be yourself.",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/GuoPCinGitHub",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discordapp.com/users/1365243211513073684",
		},
		{
			name: "Twitter",
			icon: "fa7-brands:twitter",
			url: "https://twitter.com/Guo_PC",
		},
		{
			name: "Bluesky",
			icon: "fa7-brands:bluesky",
			url: "https://bsky.app/profile/saki-itomi.bsky.social",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://store.steampowered.com/id/GuoPC/",
		},
	],
});
