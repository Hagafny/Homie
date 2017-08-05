import React from 'react'

const Resource = (props) => {
  if (!props.url)
    return false;

  let url = props.prefix ? `${props.prefix}${props.url}` : props.url;
  return (
    <div>
      <img src={props.img} alt="" height="20" width="20" />
      <span>  <a href={url} target="_blank">{props.children}</a></span>
    </div>

  )
}

export default Resource;