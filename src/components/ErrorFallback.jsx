function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h3 className="font-bold">There was an error:</h3>
      <p className="mt-2 font-medium whiteSpace-normal">{error.message}</p>
    </div>
  )
}

export default ErrorFallback
