interface ForProps<T> {
  items: T[] | null | undefined // A lista de itens que será iterada
  render: (item: T, index: number) => React.ReactNode // Função de renderização para cada item
  fallback?: React.ReactNode // Componente ou elemento mostrado se a lista estiver vazia
}

/**
 * Componente For
 *
 * Um wrapper que imita o .map para listas, permitindo um fallback para listas vazias.
 * @param items - Lista de itens para iterar
 * @param render - Função que define como renderizar cada item
 * @param fallback - (Opcional) Componente ou texto para exibir se a lista estiver vazia
 */
export const For = <T,>({
  items,
  render,
  fallback = null
}: ForProps<T>): JSX.Element => {
  if (!items || items.length === 0) {
    return <>{fallback}</>
  }

  return <>{items.map(render)}</>
}

export default For
