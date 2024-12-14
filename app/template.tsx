'use client';

/**
 * 与跨路由持续存在并保持状态的布局不同，模板在导航时为其每个子节点创建一个新实例
 * 这意味着，当用户在共享模板的路由之间导航时，将挂载 child 的新实例，重新创建 DOM 元素，不会在 Client Components 中保留状态，并且 effects 会重新同步
 */
export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return children;
}
