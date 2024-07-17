import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/crew')({
  component: () => <div>Hello /crew!</div>
})