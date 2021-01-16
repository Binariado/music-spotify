import Layout from '../components/templates/Layout';

export default function Home() {
  return (
    <Layout title={"Music-spotify"}>
      <div className="flex justify-center">
        <div className="mt-4 p-4 w-1/4 rounded bg-blue-300 text-center">
          <p className="text-blue-600">This should be very blue.</p>
        </div>
      </div>
    </Layout>
  )
}