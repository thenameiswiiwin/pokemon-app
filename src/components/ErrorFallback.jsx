function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="font-medium" role="alert">
      <h3 className="font-bold">There was an error:</h3>
      <p className="mt-3 whiteSpace-normal">{error.message}</p>
      <button
        className="mt-3 py-1.5 px-2.5 rounded-md border border-solid bg-red-600 text-white hover:bg-red-700"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
