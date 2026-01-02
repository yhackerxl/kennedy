import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <a
          href="https://vietnam.gov.vn/about-viet-nam"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          {/* Flag of Viet Nam */}
          <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className="h-8 sm:h-9"
          >
            <title>Flag of Tanzania</title>

            <path fill="#1EB53A" d="M4 5a4 4 0 0 0-4 4v15.627L26.456 5H4z" />
            <path fill="#00A3DD" d="M32 31a4 4 0 0 0 4-4V11.33L9.479 31H32z" />
            <path
              fill="#141414"
              d="M32 5h-2.532L0 26.638V27a4 4 0 0 0 4 4h2.467L36 9.318V9a4 4 0 0 0-4-4z"
            />
            <path
              fill="#FBD035"
              d="M26.456 5L0 24.627v2.011L29.468 5zM9.479 31L36 11.33V9.318L6.467 31z"
            />
          </svg>
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            {/* <span className="inline dark:hidden">text-zinc-950</span> */}
            {/* <span className="hidden dark:inline">text-zinc-50</span> */}
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}
