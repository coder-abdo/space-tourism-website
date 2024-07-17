import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/technology')({
  component: () => <div>Hello /technology!</div>
})