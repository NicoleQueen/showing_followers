export default function Follower({followers}) {
  return (
      <div className="body">
      <main>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Followers
                      </th> 
                    </tr>
                  </thead>

                    {followers && followers.filter((follower) => (
                      follower.user_id === "1"
                    ))[0].users_permissions_users.map(f => (
                  
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              // didn't use image component to show avatar of a user.
                              <img class="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eF_EYhGbtsLyG6qO-FaPZrRkNVgemvoakw&usqp=CAU" alt=""/>
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                              {f.username}
                              </div>
                              <div class="text-sm text-gray-500">
                              {f.email}
                              </div>
                            </div>
                          </div>
                        </td>             
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>     
  )
}

export async function getStaticProps(context) {

  const res = await fetch(`http://localhost:1337/followers`)
  const followers = await res.json()

  if (!followers) {
    return {
      notFound: true,
    }
  }

  return {
    props: {followers},
  }
}
