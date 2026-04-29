import { useState } from "react";
import { D as AQUECIMENTO } from "./data-aquecimento.js";
import { SEMANA_1 } from "./data-semana1.js";
import { SEMANA_2 } from "./data-semana2.js";
import { SEMANA_3 } from "./data-semana3.js";
import { SEMANA_4 } from "./data-semana4.js";
import { ENCERRAMENTO } from "./data-encerramento.js";

const D = [
  ...AQUECIMENTO,
  ...SEMANA_1,
  ...SEMANA_2,
  ...SEMANA_3,
  ...SEMANA_4,
  ...ENCERRAMENTO,
];

const FN = {
  topo:  { l: "Topo de funil",  c: "#3A6645", bg: "#EAF3EE" },
  meio:  { l: "Meio de funil",  c: "#7C5C3A", bg: "#F5EDE4" },
  fundo: { l: "Fundo de funil", c: "#5A3A7C", bg: "#EDE4F5" },
};
const FC = {
  "Reel":          { c: "#7C2A3A", bg: "#F5E4E8" },
  "Carrossel":     { c: "#2A5A7C", bg: "#E4EEF5" },
  "Post estático": { c: "#3A7C2A", bg: "#E4F5E4" },
  "Stories":       { c: "#7C6A2A", bg: "#F5EEE4" },
};
const PHS = [
  { id: "aq",  l: "Aquecimento",  s: "24–30 abr", tag: "Vitale" },
  { id: "s1",  l: "Semana 1",     s: "1–7 mai",   tag: "CEO 7 dias + Reveal" },
  { id: "s2",  l: "Semana 2",     s: "8–14 mai",  tag: "CEO 21 dias S2" },
  { id: "s3",  l: "Semana 3",     s: "15–21 mai", tag: "CEO 21 dias S3" },
  { id: "s4",  l: "Semana 4",     s: "22–27 mai", tag: "CEO Pós-oferta" },
  { id: "enc", l: "Encerramento", s: "28–31 mai", tag: "Fechamento" },
];

// ─── Componentes auxiliares ───
function Badge({ type, children }) {
  const color = FC[type] || FC["Post estático"];
  return (
    <span style={{ fontSize:10, fontWeight:500, padding:"2px 9px", borderRadius:20,
      background:color.bg, color:color.c }}>
      {children || type}
    </span>
  );
}
function FnBadge({ fn, style={} }) {
  const f = FN[fn];
  return (
    <span style={{ display:"inline-block", fontSize:9, padding:"2px 7px", borderRadius:20,
      fontWeight:500, background:f.bg, color:f.c, ...style }}>
      {f.l}
    </span>
  );
}
function Block({ label, children }) {
  return (
    <div style={{ background:"#F7EEE8", border:"1px solid rgba(184,151,90,.18)",
      borderRadius:8, padding:"13px 14px", marginBottom:9 }}>
      <div style={{ fontSize:9, fontWeight:500, color:"#B8975A", letterSpacing:".06em",
        textTransform:"uppercase", marginBottom:7 }}>{label}</div>
      <div style={{ fontSize:12, color:"#2C1A10", lineHeight:1.8, whiteSpace:"pre-line" }}>
        {children}
      </div>
    </div>
  );
}
function Frame({ label, children }) {
  return (
    <div style={{ background:"#FAF8F4", border:"1px solid rgba(44,26,16,.07)",
      borderRadius:7, padding:"10px 12px", marginBottom:7 }}>
      <div style={{ fontSize:9, fontWeight:500, color:"#B8975A", letterSpacing:".06em",
        textTransform:"uppercase", marginBottom:5 }}>{label}</div>
      <div style={{ fontSize:11, color:"#2C1A10", lineHeight:1.75, whiteSpace:"pre-line" }}>
        {children}
      </div>
    </div>
  );
}

function StoryFrame({ story }) {
  const Item = ({ label, color, children }) => (
    <div style={{ marginTop: 6, paddingLeft: 9, borderLeft: `2px solid ${color}` }}>
      <div style={{ fontSize: 8, fontWeight: 600, color, letterSpacing: ".08em",
        textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 11, color: "#2C1A10", lineHeight: 1.6, whiteSpace: "pre-line" }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ background: "#FAF8F4", border: "1px solid rgba(44,26,16,.07)",
      borderRadius: 7, padding: "11px 13px", marginBottom: 8 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#2C1A10", marginBottom: 4 }}>
        {story.f}
      </div>
      {story.mostrar && <Item label="Mostrar" color="#7C5C3A">{story.mostrar}</Item>}
      {story.sticker && <Item label="Sticker" color="#5A3A7C">{story.sticker}</Item>}
      {story.arte && <Item label="Texto na arte" color="#B8975A">{story.arte}</Item>}
      {story.fala && <Item label="Fala / Legenda" color="#3A6645">{story.fala}</Item>}
    </div>
  );
}

// ─── App principal ───
export default function App() {
  const [activePhase, setActivePhase] = useState("aq");
  const [activeDay,   setActiveDay  ] = useState(1);

  const phaseDays = D.filter(d => d.ph === activePhase);
  const day       = D.find(d => d.id === activeDay) || D[0];
  const phInfo    = PHS.find(p => p.id === activePhase);

  return (
    <div style={{ background:"#FAF8F4", minHeight:"100vh",
      fontFamily:"'DM Sans', system-ui, sans-serif", color:"#2C1A10" }}>

      {/* Header */}
      <div style={{ background:"#2C1A10", padding:"18px 20px 14px" }}>
        <div style={{ fontSize:17, fontWeight:400, color:"#E8D5A3",
          letterSpacing:".08em", fontFamily:"'Cormorant Garamond', Georgia, serif" }}>
          The Bridal Elegance
        </div>
        <div style={{ fontSize:11, color:"rgba(232,213,163,.45)", marginTop:2, letterSpacing:".06em" }}>
          CAMPANHA MÊS DAS NOIVAS — STORIES COMPLETOS
        </div>
      </div>

      {/* Phase nav */}
      <div style={{ display:"flex", gap:3, padding:"12px 20px 0", background:"#2C1A10",
        overflowX:"auto", borderBottom:"1px solid rgba(255,255,255,.05)" }}>
        {PHS.map(p => (
          <button key={p.id}
            onClick={() => {
              setActivePhase(p.id);
              const first = D.find(d => d.ph === p.id);
              if (first) setActiveDay(first.id);
            }}
            style={{ padding:"8px 13px 12px", fontSize:11, background:"none", border:"none",
              cursor:"pointer", letterSpacing:".04em", whiteSpace:"nowrap",
              color: activePhase === p.id ? "#E8D5A3" : "rgba(232,213,163,.4)",
              borderBottom: activePhase === p.id ? "2px solid #B8975A" : "2px solid transparent",
              fontWeight: activePhase === p.id ? 500 : 400 }}>
            {p.l}
            <span style={{ fontSize:9, opacity:.6, display:"block", marginTop:1 }}>{p.s}</span>
          </button>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(88px,1fr))",
        gap:7, padding:"14px 20px" }}>
        {phaseDays.map(d => (
          <div key={d.id} onClick={() => setActiveDay(d.id)}
            style={{ background: activeDay === d.id ? "#2C1A10" : "#fff",
              border: activeDay === d.id ? "1px solid #B8975A" : "1px solid rgba(44,26,16,.08)",
              borderRadius:10, padding:"10px 10px 9px", cursor:"pointer" }}>
            <div style={{ fontSize:9, marginBottom:2,
              color: activeDay === d.id ? "rgba(232,213,163,.5)" : "#8B7355" }}>{d.dt}</div>
            <div style={{ fontSize:12, fontWeight:500,
              color: activeDay === d.id ? "#fff" : "#2C1A10" }}>{d.dn.split(",")[0]}</div>
            <div style={{ fontSize:9, marginTop:4, lineHeight:1.3,
              color: activeDay === d.id ? "rgba(232,213,163,.65)" : "#8B7355" }}>
              {d.tipo.split("|")[0].trim()}
            </div>
            <FnBadge fn={d.fn} style={{ marginTop:6 }} />
          </div>
        ))}
      </div>

      {/* Detail */}
      <div style={{ padding:"0 20px 40px" }}>

        {/* Protocol badge */}
        <div style={{ background:"#EDE4F5", border:"1px solid rgba(90,58,124,.2)",
          borderRadius:8, padding:"11px 13px", marginBottom:11 }}>
          <div style={{ fontSize:9, fontWeight:500, color:"#5A3A7C", letterSpacing:".06em",
            textTransform:"uppercase", marginBottom:5 }}>
            Protocolo — {phInfo?.tag}
          </div>
          <div style={{ fontSize:11, color:"#3A2254", lineHeight:1.6 }}>{day.proto}</div>
        </div>

        {/* Day header */}
        <div style={{ padding:"14px 0 13px", borderBottom:"1px solid rgba(44,26,16,.07)",
          marginBottom:14 }}>
          <div style={{ fontSize:10, color:"#8B7355", letterSpacing:".05em", marginBottom:2 }}>
            DIA {day.id} · {day.dn}
          </div>
          <div style={{ fontSize:17, fontWeight:400, color:"#2C1A10",
            fontFamily:"'Cormorant Garamond', Georgia, serif", lineHeight:1.3 }}>
            {day.tipo.split("|")[0].trim()}
          </div>
          {day.tipo.split("|")[1] && (
            <div style={{ fontSize:11, color:"#8B7355", marginTop:4, fontStyle:"italic" }}>
              {day.tipo.split("|")[1].trim()}
            </div>
          )}
        </div>

        {/* Feed section */}
        <div style={{ background:"#fff", border:"1px solid rgba(44,26,16,.07)",
          borderRadius:11, padding:15, marginBottom:11 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:11,
            paddingBottom:9, borderBottom:"1px solid rgba(44,26,16,.05)" }}>
            <Badge type={day.fmt} />
            <span style={{ fontSize:12, fontWeight:500 }}>Post do feed</span>
            <FnBadge fn={day.fn} style={{ marginLeft:"auto" }} />
          </div>

          <div style={{ fontSize:9, fontWeight:500, color:"#8B7355", letterSpacing:".06em",
            textTransform:"uppercase", marginBottom:5 }}>Direção visual</div>
          <div style={{ fontSize:11, color:"#8B7355", fontStyle:"italic",
            marginBottom:11, lineHeight:1.55 }}>{day.vis}</div>

          {day.rot && <Block label="Roteiro — palavra por palavra">{day.rot}</Block>}

          {day.slides && (
            <>
              <div style={{ fontSize:9, fontWeight:500, color:"#8B7355", letterSpacing:".06em",
                textTransform:"uppercase", margin:"11px 0 5px" }}>Slides — carrossel</div>
              {day.slides.map((s,i) => <Frame key={i} label={s.n}>{s.c}</Frame>)}
            </>
          )}

          <Block label="Caption">{day.cap}</Block>
        </div>

        {/* Stories section */}
        <div style={{ background:"#fff", border:"1px solid rgba(44,26,16,.07)",
          borderRadius:11, padding:15, marginBottom:11 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:11,
            paddingBottom:9, borderBottom:"1px solid rgba(44,26,16,.05)" }}>
            <Badge type="Stories">Stories</Badge>
            <span style={{ fontSize:12, fontWeight:500 }}>
              Sequência de {day.st.length} stories — provocar, incomodar, conectar, acolher
            </span>
          </div>
          {day.st.map((s,i) => <StoryFrame key={i} story={s} />)}
        </div>

        {/* Ação */}
        <div style={{ background:"rgba(184,151,90,.07)", border:"1px solid rgba(184,151,90,.22)",
          borderRadius:8, padding:"11px 13px" }}>
          <div style={{ fontSize:9, fontWeight:500, color:"#B8975A", letterSpacing:".06em",
            textTransform:"uppercase", marginBottom:5 }}>Ação estratégica do dia</div>
          <div style={{ fontSize:11, color:"#2C1A10", lineHeight:1.6 }}>{day.acao}</div>
        </div>

      </div>
    </div>
  );
}
