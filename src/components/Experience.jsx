import React from "react";

export default function Experience({ background = "/assets/background.jpg" }) {
	return (
		<>
			<div className="flex justify-center w-full mt-8">
				<div className="w-full max-w-2xl text-center text-white">
					<h1 className="text-2xl md:text-3xl font-semibold">Professional Experience</h1>
					<p className="mt-1 text-sm text-white/80">AI Internship</p>
				</div>
			</div>

			<main className="mx-auto w-full max-w-2xl" style={{ padding: "12px 20px 8px" }}>
				<article className="mb-2 text-white">
					<h2 className="text-lg font-medium mb-1 text-white">[Internship]</h2>
					<div className="text-sm text-white flex flex-wrap gap-2 items-center">
						<span className="company">[GAOTek Inc.]</span>
						<span className="period">[Agt 2025 – Present]</span>
						<span className="location">[Remote]</span>
					</div>
					<p className="mt-3 text-white/90">
						Membantu dalam pembuatan dokumentasi teknis, laporan, dan artikel tentang Kecerdasan Buatan,
						memastikan kejelasan dan aksesibilitas bagi orang-orang di IoT.
					</p>
				</article>
			</main>
		</>
	);
}