import Link from "next/link"


const PostCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
    
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" href='/blog/1'>Read More</Link>
      </div>
    </div>
  </div>
  )
}

export default PostCard