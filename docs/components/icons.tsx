import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const Icons = {
	nextJS: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
			></path>
		</svg>
	),
	nuxt: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.6 1.6 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.53 1.53 0 0 0-.217-.782L17.792 7.414a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.6 1.6 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.6 1.6 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.6 1.6 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632"
			></path>
		</svg>
	),
	svelteKit: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 426 512"
		>
			<path
				fill="currentColor"
				d="M403.508 229.23C491.235 87.7 315.378-58.105 190.392 23.555L71.528 99.337c-57.559 37.487-82.55 109.513-47.45 183.53c-87.761 133.132 83.005 289.03 213.116 205.762l118.864-75.782c64.673-42.583 79.512-116.018 47.45-183.616m-297.592-80.886l118.69-75.739c77.973-46.679 167.756 34.942 135.388 110.992c-19.225-15.274-40.65-24.665-56.923-28.894c6.186-24.57-22.335-42.796-42.174-30.106l-118.95 75.48c-29.411 20.328 1.946 62.138 31.014 44.596l45.33-28.895c101.725-57.403 198 80.425 103.38 147.975l-118.692 75.739C131.455 485.225 34.11 411.96 67.592 328.5c17.786 13.463 36.677 23.363 56.923 28.894c-4.47 28.222 24.006 41.943 42.476 30.365L285.64 312.02c29.28-21.955-2.149-61.692-30.97-44.595l-45.504 28.894c-100.56 58.77-199.076-80.42-103.25-147.975"
			></path>
		</svg>
	),
	solidStart: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 128 128"
		>
			<path
				fill="currentColor"
				d="M61.832 4.744c-3.205.058-6.37.395-9.45 1.07l-2.402.803c-4.806 1.603-8.813 4.005-11.216 7.21l-1.602 2.404l-12.017 20.828l.166.031c-4.785 5.823-5.007 14.07-.166 21.6c1.804 2.345 4.073 4.431 6.634 6.234l-15.445 4.982L.311 97.946s42.46 32.044 75.306 24.033l2.403-.801c5.322-1.565 9.292-4.48 11.683-8.068l.334.056l16.022-28.84c3.204-5.608 2.404-12.016-1.602-18.425a36 36 0 0 0-7.059-6.643l15.872-5.375l14.42-24.033S92.817 4.19 61.831 4.744z"
			></path>
		</svg>
	),
	react: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 15 15"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582q.015.157.037.321a14 14 0 0 1 1.676-.311a13 13 0 0 1 1.275-1.54l-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14q-.09-.076-.182-.148C6.746 1.377 6.16 1.04 5.594.876C5.024.711 4.441.711 3.928.99s-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965q.023.255.065.523q-.256.09-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584S.278 8.68.694 9.103c.414.42.989.774 1.66 1.062q.235.1.49.192a9 9 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149q.09.076.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a9 9 0 0 0-.065-.523q.255-.09.49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a9 9 0 0 0-.49-.192q.04-.268.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334S9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365q-.338.346-.672.755a17 17 0 0 1 1.344 0a11 11 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582q-.015.158-.037.32a14 14 0 0 0-1.676-.31m-.563.944a15.6 15.6 0 0 0-2.898 0A15.6 15.6 0 0 0 4.72 7.584a15.7 15.7 0 0 0 1.33 2.433a15.6 15.6 0 0 0 2.9 0a15.6 15.6 0 0 0 1.33-2.433A15.7 15.7 0 0 0 8.95 5.15m1.824 1.138a17 17 0 0 0-.527-.956q.39.075.752.168q-.094.385-.225.788m0 2.591a17 17 0 0 1-.527.957q.39-.075.752-.169a12 12 0 0 0-.225-.788m1.18.487a14 14 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782q.154.058.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a8 8 0 0 1-.3.12m-.765 1.285a14 14 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032s.404-.348.525-.746c.123-.4.164-.936.105-1.582a7 7 0 0 0-.037-.32M7.5 11.826q.338-.346.672-.755a17 17 0 0 1-1.344 0q.334.408.672.755m-2.746-1.99a17 17 0 0 1-.527-.957q-.13.404-.225.788q.361.094.752.169m-.942.815a14 14 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54l-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032s-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a8 8 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a14 14 0 0 1-.588-1.782q-.155.058-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846q.146.061.3.12m.955-3.865q.094.384.225.787a17 17 0 0 1 .527-.956q-.39.075-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
				clipRule="evenodd"
			></path>
		</svg>
	),
	hono: (props?: SVGProps<any>) => (
		<svg
			className={cn(props?.className)}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 256 330"
		>
			<path
				className="fill-foreground"
				d="M134.129.029q1.315-.17 2.319.662a1256 1256 0 0 1 69.573 93.427q24.141 36.346 41.082 76.862q27.055 72.162-28.16 125.564q-48.313 40.83-111.318 31.805q-75.312-15.355-102.373-87.133Q-1.796 217.85.614 193.51q4.014-41.896 19.878-80.838q6.61-15.888 17.228-29.154a382 382 0 0 1 16.565 21.203q3.66 3.825 7.62 7.289Q92.138 52.013 134.13.029"
				opacity=".993"
			></path>
			<path
				className="fill-muted-foreground"
				d="M129.49 53.7q36.47 42.3 65.93 90.114a187.3 187.3 0 0 1 15.24 33.13q12.507 49.206-26.836 81.169q-38.05 26.774-83.488 15.902q-48.999-15.205-56.653-65.929q-1.857-15.993 3.314-31.142a225.4 225.4 0 0 1 17.89-35.78l19.878-29.155a5510 5510 0 0 0 44.726-58.31"
			></path>
		</svg>
	),
	astro: (props?: SVGProps<any>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			width="1.2em"
			height="1.2em"
			viewBox="0 0 128 128"
		>
			<path
				className="fill-foreground"
				d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
			></path>
		</svg>
	),
	vue: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 24 24"
		>
			<path
				className="fill-foreground"
				d="M1.001 3h4l7 12l7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3z"
			></path>
		</svg>
	),
	express: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 256 256"
		>
			<g fill="none">
				<rect
					width="256"
					height="256"
					className="fill-foreground"
					rx="60"
				></rect>
				<path
					className="fill-background"
					d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
				></path>
			</g>
		</svg>
	),
	javascript: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 512 512"
		>
			<path
				className="fill-foreground"
				d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64"
			></path>
		</svg>
	),
	node: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 15 15"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2"
				clipRule="evenodd"
			></path>
		</svg>
	),
	book: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98z"
			></path>
			<path
				fill="currentColor"
				d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03"
			></path>
		</svg>
	),
	remix: () => (
		<svg
			width="1.2em"
			height="1.2em"
			viewBox="0 0 412 474"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M393.946 364.768C398.201 419.418 398.201 445.036 398.201 473H271.756C271.756 466.909 271.865 461.337 271.975 455.687C272.317 438.123 272.674 419.807 269.828 382.819C266.067 328.667 242.748 316.634 199.871 316.634H161.883H1V218.109H205.889C260.049 218.109 287.13 201.633 287.13 158.011C287.13 119.654 260.049 96.4098 205.889 96.4098H1V0H228.456C351.069 0 412 57.9117 412 150.42C412 219.613 369.123 264.739 311.201 272.26C360.096 282.037 388.681 309.865 393.946 364.768Z"
				fill="currentColor"
			/>
			<path
				d="M1 473V399.553H134.697C157.029 399.553 161.878 416.116 161.878 425.994V473H1Z"
				fill="currentColor"
			/>
			<path
				d="M1 399.053H0.5V399.553V473V473.5H1H161.878H162.378V473V425.994C162.378 420.988 161.152 414.26 157.063 408.77C152.955 403.255 146.004 399.053 134.697 399.053H1Z"
				stroke="currentColor"
				strokeOpacity="0.8"
			/>
		</svg>
	),
	elysia: () => (
		<svg
			width="1.2em"
			height="1.2em"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M424.404 470.816C478.089 423.889 512 354.905 512 278C512 136.615 397.385 22 256 22C114.615 22 0 136.615 0 278C0 352.658 31.9583 419.851 82.9409 466.646L83.1767 465L419.144 355L424.404 470.816Z"
				fill="currentColor"
			/>
			<path
				d="M189.915 52.7412L144.5 46L151.303 43.9069C155.402 42.6455 159.248 40.6719 162.662 38.0765L163.73 37.2654C167.845 34.1375 171.12 30.0364 173.259 25.3304C174.414 22.7883 175.224 20.1027 175.665 17.3454L176.173 14.1698C176.72 10.7473 176.692 7.25741 176.09 3.84416C175.834 2.39429 177.279 1.23239 178.64 1.79296L180.498 2.55815C182.829 3.51798 185.084 4.65434 187.242 5.95732L194.965 10.6205C205.229 16.8174 214.226 24.9023 221.48 34.4477L226.616 41.2051C228.529 43.7228 230.783 45.9625 233.313 47.8599C236.088 49.9411 239.164 51.5874 242.435 52.7418L246 54L227.274 54.749C214.785 55.2486 202.278 54.5764 189.915 52.7412Z"
				fill="currentColor"
			/>
			<path
				d="M178.321 93.006L191.79 68.3844C191.922 68.143 191.93 67.8528 191.812 67.6042L187.22 57.9361C184.337 51.8673 178.219 48 171.5 48L170.23 47.9562C161.437 47.653 152.704 46.3829 144.188 44.169L142.504 43.731C135.521 41.9153 128.746 39.3732 122.293 36.1463L119.446 34.723C115.159 32.5797 111.099 30.012 107.325 27.0584L103.55 24.1043C102.428 23.2265 100.803 23.4506 99.9606 24.5992C97.3651 28.1384 95.7379 32.2935 95.2395 36.6541L94.5535 42.6571C94.1854 45.8774 94.1446 49.1267 94.4316 52.3552L96.1031 71.1595C97.3467 85.1501 102.175 98.584 110.123 110.165L111.825 112.645C114.267 116.203 117.113 119.466 120.306 122.369C120.756 122.778 121.329 123.03 121.936 123.084C145.029 125.156 167.194 113.348 178.321 93.006Z"
				fill="currentColor"
			/>
			<path
				d="M127.378 123.538L143.376 116.613C150.438 113.557 152.588 104.577 147.676 98.6533C143.683 93.8378 136.58 93.0803 131.661 96.9453L127.867 99.9256C126.958 100.64 126.127 101.448 125.387 102.336L116.263 113.284C114.982 114.822 115.084 117.084 116.5 118.5L119.318 121.721C119.77 122.237 120.296 122.685 120.878 123.049C122.833 124.271 125.263 124.453 127.378 123.538Z"
				fill="#EDEDED"
			/>
			<path
				d="M147.988 44.8437L147.5 45L148.962 45.4651C155.294 47.4798 161.861 48.66 168.498 48.9761C168.83 48.9919 169.163 48.9534 169.483 48.8619L172.5 48L174 47.5L164.419 45.4172C163.158 45.1431 161.982 44.5687 160.991 43.7426C160.218 43.0981 160.223 41.9084 161.002 41.2708L162.423 40.1084C164.12 38.7197 165.493 36.976 166.444 35C160.934 39.3642 154.682 42.6988 147.988 44.8437Z"
				fill="#B2B2B2"
			/>
			<path
				d="M202.776 219.428L72.2905 452.693C71.643 453.851 70.0687 454.069 69.1308 453.131L66.5 450.5L55.5 438L48.4888 428.927C41.8407 420.323 35.9052 411.192 30.7414 401.624L29.7434 399.775C24.2581 389.611 19.6635 378.991 16.0112 368.034L12.5 357.5C7.22519 338.379 6.01447 318.365 8.94583 298.747L9.06961 297.919C10.354 289.323 12.4034 280.86 15.1935 272.629L21 255.5L25.3334 246.385C32.0537 232.249 41.3193 219.472 52.6669 208.691L58.1719 203.462C69.5529 192.65 83.3937 184.769 98.5 180.5C94.967 181.498 91.3608 182.216 87.7149 182.647L80.5 183.5L75 184L69 185L63 185.561L59 186L56.1186 186.18C55.1927 186.238 54.7576 185.057 55.4998 184.5L55.5002 184.5L59.5273 182.57C72.5066 176.351 83.1766 166.172 90 153.5L94.4475 146.562C99.7511 138.288 106.807 131.28 115.116 126.032L116.833 124.948C119.935 122.989 123.246 121.384 126.705 120.163L142.446 114.607C145.348 113.583 147.69 111.39 148.903 108.561L149.143 108C149.705 106.687 149.932 105.255 149.803 103.833C149.608 101.689 148.616 99.6966 147.023 98.2485L144.256 95.7328C144.086 95.5779 143.93 95.4073 143.792 95.2232L126 71.5L111.803 51.9315C108.994 48.0592 107.359 43.4599 107.094 38.6832C107.051 37.9263 107.836 37.4015 108.52 37.7295L123.881 45.1028C137.174 51.4834 152.33 52.825 166.537 48.8786C169.84 47.9612 173.214 47.3242 176.624 46.9745L183.675 46.2513C201.406 44.4328 219.32 45.9054 236.516 50.5953L238 51L254.798 57.0472C275.869 64.6329 292.567 81.0571 300.5 102L304.022 115.734C305.004 119.567 306.392 123.285 308.162 126.824C312.321 135.142 318.495 142.289 326.121 147.613L335.084 153.87C339.023 156.62 343.157 159.078 347.453 161.227L367.289 171.145C368.178 171.589 368.444 172.732 367.843 173.523C362.372 180.721 355.148 186.395 346.859 190.005L335.371 195.008C330.797 197 326.081 198.65 321.262 199.945L312.822 202.212C300.992 205.39 288.796 207 276.546 207H256.333C252.148 207 248.001 206.213 244.108 204.679C228.581 198.562 210.923 204.863 202.776 219.428Z"
				fill="white"
			/>
			<path
				d="M271.185 135.316L279.987 135.418C281.182 135.432 281.452 133.748 280.312 133.388C278.441 132.797 276.623 132.048 274.879 131.15L268.008 127.61C263.35 125.211 258.969 122.308 254.944 118.953L253.592 117.827C250.54 115.283 247.77 112.418 245.33 109.282L243.768 107.273C243.234 106.586 242.134 107.005 242.192 107.873C243.212 123.186 255.839 135.138 271.185 135.316Z"
				fill="#666666"
			/>
			<path
				d="M82.2231 456.395L231.313 323.4C245.367 310.863 257.58 296.403 267.59 280.45L268.5 279C273.404 269.192 275.497 258.217 274.547 247.293L273.24 232.258C272.436 223.009 268.618 214.28 262.373 207.41C262.131 207.144 261.81 206.961 261.457 206.889L237.5 202C220.117 196.752 201.688 195.995 183.933 199.8L183 200L169.06 203.259C128.405 212.763 92.5742 236.685 68.2116 270.592L67.597 271.447C60.8846 280.789 55.1822 290.817 50.5856 301.362L49.765 303.245C38.1544 329.881 34.2409 359.238 38.4684 387.985L39.8511 397.387C41.2751 407.07 44.1931 416.474 48.5011 425.262C52.4798 433.379 57.6014 440.883 63.7095 447.547L71.3177 455.847C74.1911 458.981 79.0498 459.225 82.2231 456.395Z"
				fill="#CCCCCC"
			/>
			<path
				d="M212.749 278.858L212.267 279.133C199.686 286.322 192.918 299.892 193.58 314.367C193.768 318.484 197.893 322.255 201.858 321.132L209.163 319.062C218.607 316.386 227.353 311.681 234.789 305.274L256 287L262.292 282.343C298.871 255.269 344.833 244.113 389.754 251.405C391.14 251.63 391.184 253.607 389.81 253.894L384.5 255L382.093 255.842C377.15 257.572 372.856 260.776 369.79 265.022C369.214 265.819 369.982 266.89 370.922 266.601L372.663 266.065C382.467 263.049 392.751 261.904 402.978 262.691L407 263C428.843 263.95 449.114 274.626 462.254 292.1L467.179 298.65C481.776 318.063 487.953 342.53 484.319 366.545L482.421 379.087C479.837 396.163 473.618 412.486 464.184 426.952L463.5 428L453 442L441.5 455L430.965 465.114C421.346 474.348 410.827 482.597 399.567 489.738L396 492L389.175 495.25C387.417 496.087 385.95 493.678 387.5 492.5L397 483.5L398.953 481.449C404.232 475.906 408.027 469.12 409.986 461.721L410.889 458.309C411.295 456.776 411.5 455.174 411.5 453.588C411.5 444.909 405.354 437.298 396.836 435.631C391.554 434.597 386.085 435.962 381.907 439.356L372.5 447L355.894 460.587C344.995 469.504 333.185 477.245 320.66 483.682L303.5 492.5L274.5 503.5L268.412 505.16C257.822 508.049 247.012 510.06 236.092 511.174L228 512H202L167.5 508.25L148.832 504.21C138.985 502.079 129.456 498.682 120.482 494.103C113.181 490.378 106.293 485.894 99.931 480.725L85.5 469C68.005 455.64 57.0449 435.448 55.3749 413.498L54.5 402L55.5295 385.822C57.134 360.608 66.7911 336.576 83.0792 317.263C89.6652 309.454 97.2376 302.534 105.606 296.675L108.677 294.526C121.458 285.579 135.72 278.961 150.805 274.976L160.947 272.297C174.135 268.813 187.952 268.445 201.307 271.22L211.887 273.418C214.542 273.97 215.103 277.513 212.749 278.858Z"
				fill="#5E5E5E"
			/>
		</svg>
	),
	tanstack: () => (
		<svg
			className={cn(props?.className)}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 100 100"
		>
			<mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
				<circle cx="50" cy="50" r="50" className="fill-foreground"/>
			</mask>
			<g mask="url(#a)">
				<circle cx="11" cy="119" r="52" className="fill-muted-foreground stroke-foreground" strokeWidth="4"/>
				<circle cx="10" cy="125" r="52" className="fill-muted-foreground stroke-foreground" strokeWidth="4"/>
				<circle cx="9" cy="131" r="52" className="fill-muted-foreground stroke-muted-foreground" strokeWidth="4"/>
				<circle cx="88" cy="119" r="52" className="fill-muted-foreground stroke-foreground" strokeWidth="4"/>
				<path className="fill-foreground" d="M89 35h2v5h-2zM83 34l2 1-1 4h-2zM77 31l2 1-3 4-2-1zM73 27l1 1-3 4-1-2zM70 23l1 1-4 3-1-2zM68 18v2l-4 1-1-2zM68 11l1 2-5 1-1-2zM69 6v2h-5V6z"/>
				<circle cx="89" cy="125" r="52" className="fill-muted-foreground stroke-foreground" strokeWidth="4"/>
				<circle cx="90" cy="131" r="52" className="fill-muted-foreground stroke-muted-foreground" strokeWidth="4"/>
				<ellipse cx="49.5" cy="119" rx="41.5" ry="51" className="fill-muted-foreground"/>
				<path d="M34 38v-9c1 1 2 4 5 6l7 30-8 2c-1-23-2-23-4-29Z" className="fill-foreground stroke-muted-foreground"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M95 123c0 31-20 57-45 57S5 154 5 123c0-27 14-50 33-56l12-2c25 0 45 26 45 58Zm-45 47c22 0 39-22 39-50S72 70 50 70s-39 22-39 50 17 50 39 50Z" className="fill-foreground"/>
				<path d="M34 29c-4-8-11-5-14-4 2 3 5 4 9 4h5Z" className="fill-foreground stroke-muted-foreground"/>
				<path d="M25 38c-1 6 0 14 2 18 5-7 7-13 7-18v-9c-5 1-7 5-9 9Z" className="fill-muted-foreground"/>
				<path d="M34 29c-1 3-5 11-5 16m5-16c-5 1-7 5-9 9-1 6 0 14 2 18 5-7 7-13 7-18v-9Z" className="stroke-muted-foreground"/>
				<path d="M44 18c-10 1-11 7-10 11l4-3c5-4 6-7 6-8Z" className="fill-foreground stroke-muted-foreground"/>
				<path d="M34 29h7l18 4c-3-6-9-14-21-7l-4 3Z" className="fill-foreground"/>
				<path d="M34 29c4-2 12-5 18-1m-18 1h7l18 4c-3-6-9-14-21-7l-4 3Z" className="stroke-muted-foreground"/>
				<path d="M32 29a1189 1189 0 0 1-16 19c0-17 7-18 13-19h5a14 14 0 0 1-2 0Z" className="fill-foreground"/>
				<path d="M34 29c-5 1-7 5-9 9l-9 10c0-17 7-18 13-19h5Zm0 0c-5 2-11 3-14 10" className="stroke-muted-foreground"/>
				<path d="M41 29c9 2 13 10 15 14a25 25 0 0 1-22-14h7Z" className="fill-foreground"/>
				<path d="M34 29c3 1 11 5 15 9m-15-9h7c9 2 13 10 15 14a25 25 0 0 1-22-14Z" className="stroke-muted-foreground"/>
				<circle cx="91.5" cy="12.5" r="18.5" className="fill-foreground stroke-muted-foreground" strokeWidth="2"/>
		  	</g>
		</svg>
	)
};
