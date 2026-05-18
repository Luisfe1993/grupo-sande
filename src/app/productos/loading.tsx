export default function ProductosLoading() {
  return (
    <>
      {/* Header skeleton */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-80 bg-gray-700 rounded-lg animate-pulse mb-4" />
          <div className="h-6 w-96 bg-gray-700 rounded-lg animate-pulse" />
        </div>
      </section>

      {/* Filter bar skeleton */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
            <div className="ml-auto h-10 w-80 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>

      {/* Product grid skeleton */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6"
              >
                <div className="flex justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
                </div>
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-1" />
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-4 w-48 bg-gray-200 rounded animate-pulse"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
