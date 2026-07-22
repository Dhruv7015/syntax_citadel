"use client"
import { Sandpack } from "@codesandbox/sandpack-react"



const WebDevEditor = ({challenge, onComplete}) => {
  return (
    <div className="h-full w-full bg-slate-950 flex flex-col">
        <div className="flex-1 p-2">
            <Sandpack 
            theme ="dark"
            template={challenge.template}
            files={challenge.files}
            options={{
                showNavigator : false,
                showLineNumbers:true,
                showTabs: true,
                editorHeight: "65vh",

            }}
            />

        </div>

        <div className="h-16 border-t border-slate-800 px-6 flex items-center justify-end bg-slate-900">
            <button 
            onClick={onComplete}
            className="px-5 py-2 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
             rounded font-bold text-sm shadow-md text-slate-100 transition-all active:scale-95">

            </button>
        </div>
      
    </div>
  )
}

export default WebDevEditor

