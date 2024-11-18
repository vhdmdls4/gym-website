interface ShowProps {
  when: boolean // Condition to determine whether to render children
  fallback?: React.ReactNode // Optional content to display when the condition is false
  children: React.ReactNode // The content to render when the condition is true
}

/**
 * Show Component
 *
 * A conditional rendering component that displays `children` when `when` is true
 * and optionally displays `fallback` when `when` is false.
 *
 * @param when - Boolean condition for rendering children
 * @param fallback - Optional content to show when the condition is false
 * @param children - Content to display when the condition is true
 */
export const Show: React.FC<ShowProps> = ({
  when,
  fallback = null,
  children
}) => {
  return <>{when ? children : fallback}</>
}

export default Show
