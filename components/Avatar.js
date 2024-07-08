import Image from 'next/image'

function Avatar({ width, height, alignSelf, margin, image }) {
  return (
    <div className='avatar' style={{ width, height, alignSelf, margin }}>
      <Image
        className='avatar-image'
        src={image}
        alt='avatar'
        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
      />
    </div>
  )
}

export default Avatar
