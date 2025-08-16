import React, {useEffect, useState} from 'react'
import { API_BASE } from '../config'
export default function Sermons(){ const [sermons,setSermons]=useState([]); const [loading,setLoading]=useState(true);
 useEffect(()=>{ fetch(API_BASE + '/api/content').then(r=>r.json()).then(data=>{ setSermons((data.sermons||[]).slice(0,10)); setLoading(false)}).catch(()=>setLoading(false)) },[])
 return (<div><h1>Sermons</h1>{loading? <div>Loading...</div> : (sermons.length ? sermons.map(s=>(<div key={s.id} className="card"><h3>{s.title}</h3><p>{s.date}</p></div>)) : <div className="muted">No sermons published yet.</div>)}</div>)}
