'use client'
import {motion} from 'framer-motion'

const suggestedPrompts = [
  'Where are we pacing against quarterly OKRs?',
  'Summarize the last beta feedback thread.',
  'Outline a post-launch support brief.',
]

const dummyMessages = [
  {
    id: 'm1',
    role: 'ai',
    author: 'Atlas Copilot',
    initials: 'AI',
    time: '09:41',
    content:
      'Pulled Nova telemetry, incident desk, and CRM chatter. Risk dropped to 12% post-QA patch. Highlighted two items that still need owner confirmation.',
    attachments: ['Risk register excerpt', 'Support queue snapshot'],
  },
  {
    id: 'm2',
    role: 'user',
    author: 'Nora Patel',
    initials: 'NP',
    time: '09:42',
    content:
      'Need an exec-ready briefing in ten minutes. Give me traffic light status, open decisions, and any blockers tied to mobile rollout.',
  },
  {
    id: 'm3',
    role: 'ai',
    author: 'Atlas Copilot',
    initials: 'AI',
    time: '09:43',
    content:
      'Drafted briefing with ship readiness at green, support load at amber due to overnight spikes, and QA sign-off flagged as yellow until Android build 431 ships.',
    attachments: ['Briefing draft v2', 'QA punch list'],
  },
  {
    id: 'm4',
    role: 'user',
    author: 'Nora Patel',
    initials: 'NP',
    time: '09:44',
    content:
      'Loop in revenue ops with the support note and prep a follow-up message for the LATAM pod. I will review the briefing now.',
  },
]

const ChatBox = () => {
  return (
    <motion.div
      layoutId="ai-box"
      className="relative mx-auto w-full max-w-5xl rounded-[38px] border border-white/15 bg-[#050b1a] px-8 py-10 text-white shadow-[0_40px_140px_rgba(2,6,23,0.85)] backdrop-blur"
    >
      <div className="flex flex-col gap-10">
        <div className="grid gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
              <span>Dummy chat</span>
              <span>Nova launch thread</span>
            </div>
            <div className="space-y-6 overflow-y-auto pr-2" style={{maxHeight: '360px'}}>
              {dummyMessages.map((msg) => {
                const isUser = msg.role === 'user'
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${isUser ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
                      {msg.initials}
                    </div>
                    <div className="max-w-[80%] space-y-2">
                      <p
                        className={`text-[11px] uppercase tracking-[0.35em] ${isUser ? 'text-slate-400' : 'text-emerald-200'}`}
                      >
                        {msg.author} • {msg.time}
                      </p>
                      <div
                        className={`rounded-2xl border border-white/10 px-4 py-3 text-sm leading-relaxed ${isUser ? 'bg-white/10 text-slate-100' : 'bg-[#070f22] text-slate-100'}`}
                      >
                        {msg.content}
                      </div>
                      {msg.attachments && (
                        <div
                          className={`flex flex-wrap gap-2 text-[11px] ${isUser ? 'justify-end' : ''}`}
                        >
                          {msg.attachments.map((attachment) => (
                            <span
                              key={attachment}
                              className="rounded-full border border-white/15 px-3 py-1 text-slate-200"
                            >
                              {attachment}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <form className="mt-6 space-y-3">
              <label
                htmlFor="chat-prompt"
                className="text-xs uppercase tracking-[0.4em] text-slate-400"
              >
                Compose message
              </label>
              <div className="rounded-3xl border border-white/10 bg-[#070f22] p-4">
                <textarea
                  id="chat-prompt"
                  rows={3}
                  placeholder="Ask for roll-up notes, decisions, or creative explorations..."
                  className="w-full resize-none rounded-2xl border border-transparent bg-transparent px-2 py-2 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                />
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_15px_40px_rgba(6,182,212,0.45)]"
                  >
                    Send prompt
                    <span>↗</span>
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 px-4 py-2 text-white transition hover:border-white/40"
                  >
                    Attach brief
                  </button>
                  <span>Avg response 1.4s</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ChatBox
