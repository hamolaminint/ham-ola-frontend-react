import React, {useEffect, useState} from 'react'
import { API_BASE } from '../config'
export default function Home(){
  const [content, setContent] = useState(null)
  const [err, setErr] = useState(null)
  useEffect(()=>{ fetch(API_BASE + '/api/content').then(r=>{ if(!r.ok) throw new Error('Failed to fetch'); return r.json() }).then(setContent).catch(e=>{ setErr(e.message); const cache = localStorage.getItem('hamola_content'); if(cache) setContent(JSON.parse(cache)) }) },[])
  useEffect(()=>{ if(content) localStorage.setItem('hamola_content', JSON.stringify(content)) },[content])
  const ministry = content?.ministry || {}
  const divisions = content?.divisions || []
  return (
    <div>
      <h1>Welcome to {ministry.name || 'HAM OLA MINISTRY'}</h1>
      <p>{ministry.tagline}</p>
      {err && <div className="error">Error loading content — showing cached if available.</div>}
      <section>
        <h2>Divisions</h2>
        <div className="grid">
          {divisions.map(d=>(
            <div className="card" key={d.id}><h3>{d.name}</h3><p className="muted">{d.type}</p><p>{d.description}</p></div>
          ))}
        </div>
      </section>
    </div>
  )
}
