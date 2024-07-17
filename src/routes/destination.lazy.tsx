import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/destination')({
  component: () => <div>Hello /destination!</div>
})