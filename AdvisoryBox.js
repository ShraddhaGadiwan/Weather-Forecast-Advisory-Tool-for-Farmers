import React from 'react';


const AdvisoryBox = ({ advisory }) => {
return (
<div style={{ background: '#c8f7c5', padding: 20, marginTop: 20 }}>
<h2>Farmer Advisory</h2>
{advisory.map((a, i) => (
<p key={i}>• {a}</p>
))}
</div>
);
};


export default AdvisoryBox;