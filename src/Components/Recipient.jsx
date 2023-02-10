export default function Recipient(props) {

  return (

    <div className='recipient-block'>

      {props.oneBlock.map(item => {

        return (

          <div className='block' key={item.id}>
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        )

      })}

    </div>

  )

}