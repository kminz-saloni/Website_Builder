export default function Loading() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Hero skeleton */}
            <div className="rounded-2xl border border-white/[0.06] bg-surface/60 p-8 md:p-14">
                <div className="h-6 w-48 rounded-full bg-white/[0.06]" />
                <div className="mt-6 h-12 w-96 max-w-full rounded-lg bg-white/[0.06]" />
                <div className="mt-4 h-5 w-72 max-w-full rounded-lg bg-white/[0.04]" />
                <div className="mt-8 flex gap-4">
                    <div className="h-12 w-40 rounded-xl bg-white/[0.06]" />
                    <div className="h-12 w-28 rounded-xl bg-white/[0.04]" />
                </div>
            </div>

            {/* Section skeleton */}
            <div className="space-y-4">
                <div className="h-4 w-24 rounded bg-white/[0.06]" />
                <div className="h-8 w-48 rounded bg-white/[0.06]" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/[0.06] bg-surface/40 p-5"
                        >
                            <div className="h-10 w-10 rounded-lg bg-white/[0.06]" />
                            <div className="mt-4 h-3 w-20 rounded bg-white/[0.04]" />
                            <div className="mt-3 h-6 w-16 rounded bg-white/[0.06]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards skeleton */}
            <div className="grid gap-5 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-white/[0.06] bg-surface/40 p-6"
                    >
                        <div className="h-3 w-28 rounded bg-white/[0.06]" />
                        <div className="mt-3 h-6 w-48 rounded bg-white/[0.06]" />
                        <div className="mt-3 h-4 w-full rounded bg-white/[0.04]" />
                        <div className="mt-2 h-4 w-3/4 rounded bg-white/[0.04]" />
                        <div className="mt-4 flex gap-2">
                            {[...Array(3)].map((_, j) => (
                                <div
                                    key={j}
                                    className="h-7 w-16 rounded-md bg-white/[0.04]"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
