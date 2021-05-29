import Link from 'next/link'

// bugs: cannot click total number of followers && following to get followers && following used the profile card of tailwindcss.
// others works well. (clicking name of followers && following, clicking posts number and name).
// the code of commented out works well with clicking total number to get followers && following list, but no styles.
export default function User({followers, followings}) {
  return (
    <div className="body">
      <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmpoYfYDJVRcyWzlMcOQ1n3wWb9w_2rpkcg&usqp=CAU" class="w-full" />
          <div class="flex justify-center -mt-8">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHpLXLFjIFuaunS1jTIqTI2o6Fcil4mLZhQ&usqp=CAU" class="rounded-full border-solid border-white border-2 -mt-3"/>		
          </div>
        <div class="text-center px-3 pb-6 pt-2">
          <h3 class="text-black text-sm bold font-sans">Mulan</h3>
          <p class="mt-2 font-sans font-light text-grey-dark">World peace is the greates prize of all!</p>
        </div>
          <div class="flex justify-center pb-3 text-grey-dark">
            <div class="text-center mr-3 border-r pr-3">
              <h2><Link href="/posts">0</Link></h2>
              <span><Link href="/posts">Posts</Link></span>
            </div>
            <div class="text-center mr-3 border-r pr-3">
              <h2>
              <Link href="/followers">
                  <div>
                    {followers && followers.filter((follower) => (
                    follower.user_id === "1"))[0].users_permissions_users.length}
                  </div>
                </Link>
              </h2>
              <span><Link href="/followers">Followers</Link></span>
            </div>
            <div class="text-center">
              <h2>
              <Link href="/following">
                  <div>
                    {followings && followings.filter((following) => (
                    following.user_id === "1"))[0].users_permissions_users.length}
                  </div>
                </Link>
              </h2>
              <span><Link href="/following">Following</Link></span>
            </div>
          </div>
      </div>
      {/* <main className="body">
        <h1 >
          Mulan
        </h1>
        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHpLXLFjIFuaunS1jTIqTI2o6Fcil4mLZhQ&usqp=CAU" alt=""/>
        <div class="ml-4">
          <Link href="/posts">Posts </Link>
          <Link href="/posts">0 </Link>
        </div>
        <div class="ml-4">
          <Link href="/followers">Followers </Link>
          <Link href="/followers">
            <div>
              {followers && followers.filter((follower) => (
              follower.user_id === "1"))[0].users_permissions_users.length}
            </div>
          </Link>
        </div>
        <div class="ml-4">
          <Link href="/following">Following </Link>
          <Link href="/following">
            <div>
              {followings && followings.filter((following) => (
              following.user_id === "1"))[0].users_permissions_users.length}
            </div>
          </Link>
        </div>
      </main> */}
    </div>       
  )
}

export async function getStaticProps(context) {
  const res_followings = await fetch(`http://localhost:1337/followings`)
  const res_followers = await fetch(`http://localhost:1337/followers`)
  const followings = await res_followings.json()
  const followers = await res_followers.json()

  if (!followings || !followers) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      followings: followings,
      followers: followers
    },
  }
}