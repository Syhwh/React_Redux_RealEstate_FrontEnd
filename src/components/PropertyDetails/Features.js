import React from 'react';

export function Features({ features }) {
  return (<>
    {features.length > 0 && features.map((element) => {
      if (element.value){
        <li>Fireplace or fire pit</li>

      }
    })}
  </>);
}

<ul className="list-unstyled property-features-list">


<li>Outdoor Kitchen</li>
<li>Tennis Courts</li>
<li>Trees and Landscaping</li>
<li>Sun Room</li>
<li>Family Room</li>
<li>Concrete Flooring</li>
</ul>