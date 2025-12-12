const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-primary mb-4">
          Why REACH SM?
        </h2>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          RSM
        </p>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="py-4 px-6 font-semibold">FEATURE</th>
                <th className="py-4 px-6 font-semibold">MANUAL METHODS</th>
                <th className="py-4 px-6 font-semibold">ADOBE ILLUSTRATOR</th>
                <th className="py-4 px-6 font-semibold text-primary">REACH 3D</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Built for Fashion Industry</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-green-600 text-2xl">✔</td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Preloaded Libraries</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-primary">Extensive libraries</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Collaboration Tools</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-gray-700">Limited</td>
                <td className="py-4 px-6 text-primary">Seamless collaboration</td>
              </tr>

              {/* Row 4 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">AI-Powered Design Tools</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-gray-700">Limited</td>
                <td className="py-4 px-6 text-primary">Advanced AI capabilities</td>
              </tr>

              {/* Row 5 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Speed of Design</td>
                <td className="py-4 px-6 text-gray-700">Slow</td>
                <td className="py-4 px-6 text-gray-700">Moderate</td>
                <td className="py-4 px-6 text-primary font-semibold">Superfast</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
