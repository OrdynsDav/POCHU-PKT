/* Типы для @splidejs/react-splide: в package.json "exports" не отдаёт .d.ts бандлеру;
 * не используйте paths в tsconfig на .d.ts — иначе в рантайме подставляются типы без JS. */
declare module "@splidejs/react-splide" {
  import type { ComponentProps, FC, ReactNode } from "react";

  export interface SplideProps extends Omit<ComponentProps<"div">, "children"> {
    options?: Record<string, unknown>;
    children?: ReactNode;
  }

  export const Splide: FC<SplideProps>;

  export interface SplideSlideProps extends ComponentProps<"li"> {
    children?: ReactNode;
  }

  export const SplideSlide: FC<SplideSlideProps>;
}
