import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/exercises/$exerciseId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/exercises/$exerciseId"!</div>
}
