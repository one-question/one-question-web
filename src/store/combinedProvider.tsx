// combineComponents.tsx
import React, { ComponentProps, FC } from "react";

// export const combineComponents = (
//   ...components: Array<() => React.ReactNode>[]
// ) => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       return ({ children }: { children: FC }): JSX.Element => {
//         return (
//           <AccumulatedComponents>
//             <CurrentComponent>{children}</CurrentComponent>
//           </AccumulatedComponents>
//         );
//       };
//     },
//     ({ children }: { children: FC }) => <>{children}</>
//   );
// };

// export default combineComponents;
