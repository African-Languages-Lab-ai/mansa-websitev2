import type { ReactNode } from "react";
import { CodeBlock, ParamTable, Endpoint, H3, P, List, OrderedList, Chip, Callout } from "@/components/docs/primitives";

const API = "https://all-lab-portal.com";

export type DocPage = { id: string; title: string; node: ReactNode };
export type DocGroup = { heading: string; pages: DocPage[] };

const mtLanguages: [string, string][] = [
  ["af", "Afrikaans"], ["am", "Amharic"], ["ar", "Arabic"], ["bm", "Bambara"], ["bem", "Bemba"],
  ["ny", "Chichewa"], ["en", "English"], ["ee", "Ewe"], ["ha", "Hausa"], ["ig", "Igbo"],
  ["kg", "Kikongo"], ["rw", "Kinyarwanda"], ["rn", "Kirundi"], ["ln", "Lingala"], ["lg", "Luganda"],
  ["mg", "Malagasy"], ["nr", "Ndebele (South)"], ["om", "Oromo"], ["nso", "Sepedi"], ["st", "Sesotho"],
  ["sn", "Shona"], ["so", "Somali"], ["sw", "Swahili"], ["ss", "Swati"], ["ti", "Tigrinya"],
  ["ts", "Tsonga"], ["tn", "Tswana"], ["tw / ak", "Twi"], ["xh", "Xhosa"], ["yo", "Yoruba"], ["zu", "Zulu"],
];

const transcribeLanguages: [string, string][] = [
  ["Afrikaans", "South Africa"], ["Amharic", "Ethiopia"], ["Arabic (Algerian)", "North Africa"],
  ["Arabic (Egyptian)", "North Africa"], ["Arabic (Libyan)", "North Africa"], ["Arabic (Moroccan)", "North Africa"],
  ["Arabic (Standard)", "North Africa / Middle East"], ["Arabic (Sudanese)", "North Africa"],
  ["Arabic (Tunisian)", "North Africa"], ["Bambara", "West Africa"], ["Bemba", "Zambia"],
  ["Chichewa (Nyanja)", "Malawi"], ["English", "Global"], ["Ewe", "West Africa"], ["Hausa", "West Africa"],
  ["Igbo", "Nigeria"], ["Kinyarwanda", "Rwanda"], ["Kirundi", "Burundi"], ["Lingala", "Central Africa"],
  ["Luganda (Ganda)", "Uganda"], ["Malagasy", "Madagascar"], ["Malagasy (Plateau)", "Madagascar"],
  ["Oromo", "Ethiopia"], ["Sepedi (Pedi)", "South Africa"], ["Shona", "Zimbabwe"], ["Somali", "Horn of Africa"],
  ["Swahili", "East Africa"], ["Tigrinya", "Eritrea / Ethiopia"], ["Tsonga", "Southern Africa"],
  ["Tswana", "Botswana / South Africa"], ["Twi", "Ghana"], ["Xhosa", "South Africa"], ["Yoruba", "Nigeria"],
  ["Zulu", "South Africa"],
];

export const docGroups: DocGroup[] = [
  {
    heading: "Getting Started",
    pages: [
      {
        id: "overview",
        title: "Overview",
        node: (
          <>
            <P>
              The Mansa API provides enterprise-grade translation and speech services for African
              languages. It offers high-accuracy translations with sub-second response times and a
              99.9% uptime guarantee.
            </P>
            <H3>Key Features</H3>
            <List
              items={[
                "30+ African languages supported",
                "95%+ translation accuracy",
                "Sub-second response times",
                "Enterprise-grade security",
                "99.9% uptime guarantee",
              ]}
            />
            <H3>Getting Started</H3>
            <OrderedList
              items={[
                "Create an account",
                "Generate an API token",
                "Make your first request",
                "Integrate with your app",
              ]}
            />
          </>
        ),
      },
      {
        id: "authentication",
        title: "Authentication",
        node: (
          <>
            <P>
              All API requests require authentication using an API token. Include your token in the
              request body.
            </P>
            <H3>Example Request</H3>
            <CodeBlock
              label="JSON"
              code={`{
  "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "text": "Hello, how are you?",
  "to": "Swahili",
  "from": "English",
  "max_tokens": 5000,
  "creativity": 0.1,
  "context": "This is a greeting in a business email"
}`}
            />
          </>
        ),
      },
      {
        id: "quickstart",
        title: "Quick Start",
        node: (
          <>
            <P>Get up and running with the Mansa API in minutes. Here&apos;s a simple example using cURL.</P>
            <H3>1. Make a Translation Request</H3>
            <CodeBlock
              label="cURL"
              code={`curl -X POST ${API}/api/translate \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "text": "Hello, how are you?",
    "to": "Swahili",
    "from": "English",
    "max_tokens": 5000,
    "creativity": 0.7,
    "context": "This is a greeting in a business email"
  }'`}
            />
            <H3>2. Response</H3>
            <CodeBlock
              label="JSON"
              code={`{
   "message": "Success",
   "translation": "Tafadhali tafsiri maandishi haya"
 }`}
            />
          </>
        ),
      },
    ],
  },
  {
    heading: "API Reference",
    pages: [
      {
        id: "translate-endpoint",
        title: "Translate Endpoint",
        node: (
          <>
            <P>The main endpoint for translating text between languages.</P>
            <Endpoint method="POST" path="/api/translate" />
            <P>Translates text from one language to another.</P>
            <H3>Request Parameters</H3>
            <ParamTable
              rows={[
                { name: "text", type: "string", required: true, desc: "Text to translate" },
                { name: "from", type: "string", required: true, desc: "Source language code" },
                { name: "to", type: "string", required: true, desc: "Target language code" },
                { name: "token", type: "string", required: true, desc: "Your API token" },
                { name: "creativity", type: "number", required: false, desc: "Randomness level (0.1–1.0, defaults to 0.7)" },
                { name: "max_tokens", type: "number", required: false, desc: "Maximum response length (defaults to 512)" },
                { name: "context", type: "string", required: false, desc: 'Optional contextual information to help clarify ambiguities and improve translation accuracy (e.g. "This phrase is from a medical document")' },
                { name: "glossaryId", type: "string", required: false, desc: "ID of a saved glossary to use for this translation. Must match the source/target language pair." },
                { name: "glossary", type: "array", required: false, desc: 'Per-request glossary entries: [{"term": "hello", "translation": "hujambo"}]' },
                { name: "tone", type: "string", required: false, desc: 'Translation tone: "precise", "natural" (default), "expressive", or "formal".' },
              ]}
            />
          </>
        ),
      },
      {
        id: "batch-translation",
        title: "Batch Translation Endpoint",
        node: (
          <>
            <P>
              Translate multiple text segments in a single request. Supports both synchronous (≤10
              segments) and asynchronous (&gt;10 segments) processing.
            </P>
            <Endpoint method="POST" path="/api/translate" />
            <H3>Request Parameters</H3>
            <ParamTable
              rows={[
                { name: "segments", type: "array", required: true, desc: 'Array of objects with "text" (required) and "id" (optional) fields.' },
                { name: "from", type: "string", required: true, desc: "Source language code" },
                { name: "to", type: "string", required: true, desc: "Target language code" },
                { name: "token", type: "string", required: true, desc: "Your API token" },
                { name: "async", type: "boolean", required: false, desc: "Force asynchronous processing even for small batches" },
                { name: "creativity", type: "number", required: false, desc: "Randomness level (0.1–1.0, defaults to 0.7)" },
                { name: "max_tokens", type: "number", required: false, desc: "Maximum response length (defaults to 512)" },
                { name: "context", type: "string", required: false, desc: "Optional contextual information" },
                { name: "glossaryId", type: "string", required: false, desc: "ID of a saved glossary to use" },
                { name: "glossary", type: "array", required: false, desc: 'Per-request entries: [{"term": "source", "translation": "target"}]' },
              ]}
            />
            <H3>Response (Synchronous, ≤10 segments)</H3>
            <CodeBlock
              label="JSON"
              code={`{
  "message": "Success",
  "segments": [
    { "text": "Hello", "translatedText": "Hujambo", "id": "1" },
    { "text": "How are you?", "translatedText": "Habari yako?", "id": "2" }
  ],
  "from": "English",
  "to": "Swahili"
}`}
            />
            <H3>Response (Asynchronous, &gt;10 segments or async: true)</H3>
            <CodeBlock
              label="JSON"
              code={`{
  "jobId": "abc123-xyz789",
  "message": "Async translation job created"
}`}
            />
            <P>
              The jobId can be used to check status and retrieve results - see Async Job Status &amp;
              Result.
            </P>
            <H3>Python</H3>
            <CodeBlock
              label="Python"
              code={`import requests

API_URL = "${API}/api/translate"
TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

payload = {
    "token": TOKEN,
    "from": "English",
    "to": "Swahili",
    "segments": [
        {"text": "Hello", "id": "1"},
        {"text": "How are you?", "id": "2"},
        {"text": "Good morning", "id": "3"}
    ]
}

response = requests.post(API_URL, json=payload)
result = response.json()
print("Translated segments:", result.get("segments", []))`}
            />
            <H3>JavaScript</H3>
            <CodeBlock
              label="JavaScript"
              code={`const API_URL = "${API}/api/translate";
const TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

const payload = {
    token: TOKEN,
    from: "English",
    to: "Swahili",
    segments: [
        { text: "Hello", id: "1" },
        { text: "How are you?", id: "2" },
        { text: "Good morning", id: "3" }
    ]
};

const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
});

const result = await response.json();
console.log("Translated segments:", result.segments || []);`}
            />
          </>
        ),
      },
      {
        id: "async-translation",
        title: "Asynchronous Translation Endpoint",
        node: (
          <>
            <P>
              For large batch translations, use the dedicated asynchronous endpoint. This endpoint
              always returns a job ID that you can use to check status and retrieve results.
            </P>
            <Endpoint method="POST" path="/api/translate/async" />
            <P>Creates an asynchronous translation job for batch processing. Returns immediately with a job ID.</P>
            <H3>Request Body</H3>
            <CodeBlock
              label="JSON"
              code={`{
  "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "from": "English",
  "to": "Swahili",
  "segments": [
    {"text": "Segment 1", "id": "1"},
    {"text": "Segment 2", "id": "2"}
  ],
  "glossaryId": "optional-glossary-id",
  "glossary": [
    {"term": "hello", "translation": "hujambo"}
  ],
  "creativity": 0.7,
  "max_tokens": 512,
  "context": "Optional context"
}`}
            />
            <H3>Response</H3>
            <CodeBlock label="JSON" code={`{\n  "jobId": "abc123-xyz789"\n}`} />
            <Callout>Status: 202 Accepted. Use the jobId to check status and retrieve results.</Callout>
          </>
        ),
      },
      {
        id: "file-translation",
        title: "File Translation Endpoint",
        node: (
          <>
            <P>
              Upload a file (CSV, XLSX, or TXT) and translate all source texts. This endpoint always
              processes files asynchronously.
            </P>
            <Endpoint method="POST" path="/api/translate/file" />
            <P>
              For CSV/XLSX files, source text is taken from the first column. For TXT files, each
              non-empty line is treated as one source text segment.
            </P>
            <H3>Request Parameters (multipart/form-data)</H3>
            <ParamTable
              headField="Field"
              rows={[
                { name: "file", type: "file", required: true, desc: "CSV, XLSX, or TXT file (max 10MB)" },
                { name: "from", type: "string", required: true, desc: "Source language code" },
                { name: "to", type: "string", required: true, desc: "Target language code" },
                { name: "token", type: "string", required: true, desc: "Your API token" },
                { name: "context", type: "string", required: false, desc: "Optional contextual information" },
                { name: "glossaryId", type: "string", required: false, desc: "ID of a saved glossary to use" },
                { name: "glossary", type: "string", required: false, desc: "JSON string of per-request glossary entries" },
                { name: "creativity", type: "number", required: false, desc: "Randomness level (0.1–1.0)" },
                { name: "max_tokens", type: "number", required: false, desc: "Maximum response length" },
              ]}
            />
            <H3>File Format Rules</H3>
            <List
              items={[
                "CSV/XLSX: source text must be in the first column of each row",
                "TXT: each non-empty line is treated as one source text segment",
                "Maximum 1,100 segments per file",
              ]}
            />
            <H3>Response</H3>
            <CodeBlock
              label="JSON"
              code={`{
  "jobId": "abc123-xyz789",
  "fileType": "csv",
  "segmentCount": 150,
  "message": "File upload queued. The source text is taken from the first column of each non-empty row."
}`}
            />
            <H3>Python</H3>
            <CodeBlock
              label="Python"
              code={`import requests, time

API_URL = "${API}/api/translate/file"
TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

with open("source.csv", "rb") as f:
    files = {"file": ("source.csv", f, "text/csv")}
    data = {"token": TOKEN, "from": "English", "to": "Swahili"}
    response = requests.post(API_URL, files=files, data=data)
    job_data = response.json()
    job_id = job_data["jobId"]

while True:
    status_response = requests.get(f"{API_URL}/async/{job_id}/status", params={"token": TOKEN})
    status = status_response.json()["status"]
    if status == "done":
        download_response = requests.get(f"{API_URL}/async/{job_id}/download", params={"token": TOKEN})
        with open("translated.csv", "wb") as out_file:
            out_file.write(download_response.content)
        print("Downloaded translated file")
        break
    elif status == "failed":
        print("Translation failed")
        break
    time.sleep(2)`}
            />
          </>
        ),
      },
      {
        id: "async-job-status",
        title: "Async Job Status & Result",
        node: (
          <>
            <P>Check the status of an asynchronous translation job and retrieve results when complete.</P>
            <H3>Check Job Status</H3>
            <Endpoint method="GET" path="/api/translate/async/[jobId]/status" />
            <P>For file translation jobs, use: <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">/api/translate/file/async/[jobId]/status</code></P>
            <P>Query parameter: <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">token</code> (required) - can also be provided via the Authorization header.</P>
            <H3>Response</H3>
            <CodeBlock label="JSON" code={`{\n  "status": "running" | "done" | "failed" | "cancelled"\n}`} />
            <P>For file translation jobs, the response also includes <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">fileType</code>.</P>
            <H3>Get Job Result (Batch Jobs)</H3>
            <Endpoint method="GET" path="/api/translate/async/[jobId]/result" />
            <CodeBlock label="JSON - when done" code={`{\n  "segments": [\n    { "text": "Hello", "translatedText": "Hujambo", "id": "1" }\n  ]\n}`} />
            <CodeBlock label="JSON - still running (202)" code={`{\n  "status": "running"\n}`} />
            <H3>Download Translated File (File Jobs)</H3>
            <Endpoint method="GET" path="/api/translate/file/async/[jobId]/download" />
            <P>Returns the translated file as a downloadable attachment. Only available once the job status is &quot;done&quot;.</P>
          </>
        ),
      },
      {
        id: "cancel-async-job",
        title: "Cancel Async Job",
        node: (
          <>
            <P>Cancel a running asynchronous translation job. This stops the job completely and prevents further processing.</P>
            <Endpoint method="POST" path="/api/translate/async/[jobId]/cancel" />
            <P>For file translation jobs, use: <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">/api/translate/file/async/[jobId]/cancel</code></P>
            <H3>Request</H3>
            <CodeBlock
              label="Token via query or header"
              code={`POST /api/translate/async/[jobId]/cancel?token=your-token-here

# Or with Authorization header:
POST /api/translate/async/[jobId]/cancel
Authorization: Bearer your-token-here`}
            />
            <H3>Response</H3>
            <CodeBlock label="JSON" code={`{\n  "message": "Job cancelled successfully"\n}`} />
            <Callout>If the job is not found, already completed, or unauthorized, the API returns 400 with an error message.</Callout>
          </>
        ),
      },
      {
        id: "transcribe-endpoint",
        title: "Transcribe Endpoint",
        node: (
          <>
            <P>Upload a speech file and get back a text transcript. Supports automatic chunking for long speech and usage-based billing.</P>
            <Endpoint method="POST" path="/api/transcribe" />
            <H3>Request Parameters (multipart/form-data)</H3>
            <ParamTable
              headField="Field"
              rows={[
                { name: "audio", type: "file", required: true, desc: "Speech file to transcribe (WAV recommended; MP3, M4A, WEBM also supported)" },
                { name: "language", type: "string", required: true, desc: "Language name for the speech, e.g. English, Twi, Ewe, Hausa" },
                { name: "token", type: "string", required: true, desc: "Your API token" },
                { name: "duration", type: "number (seconds)", required: false, desc: "Known duration of the speech, used for balance checks (otherwise detected server-side)" },
              ]}
            />
            <H3>Python</H3>
            <CodeBlock
              label="Python"
              code={`import requests

API_URL = "${API}/api/transcribe"
TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

files = {"audio": ("audio.wav", open("path/to/audio.wav", "rb"), "audio/wav")}
data = {"language": "English", "token": TOKEN}

response = requests.post(API_URL, files=files, data=data, timeout=300)
response.raise_for_status()
result = response.json()

print("Transcript:", result.get("transcript", ""))`}
            />
            <H3>JavaScript</H3>
            <CodeBlock
              label="JavaScript"
              code={`const API_URL = "${API}/api/transcribe";
const TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

async function transcribeAudio(file) {
  const formData = new FormData();
  formData.append("audio", file, file.name || "audio.wav");
  formData.append("language", "English");
  formData.append("token", TOKEN);

  const response = await fetch(API_URL, { method: "POST", body: formData });
  if (!response.ok) throw new Error("Transcription failed");

  const data = await response.json();
  console.log("Transcript:", data.transcript);
  return data;
}`}
            />
            <H3>Supported Languages</H3>
            <div className="mt-3 flex flex-wrap gap-2">
              {transcribeLanguages.map(([lang]) => (
                <Chip key={lang}>{lang}</Chip>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "translate-status",
        title: "Translate Status Endpoint",
        node: (
          <>
            <P>Lightweight health/status check for the translation engines. Use this to verify that required models and API keys are available.</P>
            <Endpoint method="POST" path="/api/translate/status" />
            <P>Returns <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">{`{ "status": "ok" }`}</code> when the translation backend is correctly configured.</P>
            <H3>Request Body</H3>
            <CodeBlock label="JSON" code={`{\n  "token": "your-api-token-here"\n}`} />
          </>
        ),
      },
      {
        id: "error-codes",
        title: "Error Codes",
        node: (
          <>
            <P>Common error responses and their meanings.</P>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-cream-dark/60 text-left">
                    <th className="px-4 py-2.5 font-semibold text-ink">Code</th>
                    <th className="px-4 py-2.5 font-semibold text-ink">Meaning</th>
                    <th className="px-4 py-2.5 font-semibold text-ink">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["400", "Bad Request", "Invalid request payload or missing required parameters"],
                    ["401", "Unauthorized", "Invalid or missing API token"],
                    ["402", "Insufficient Balance", "Account balance is too low for the requested translation"],
                    ["500", "Server Error", "Internal server error or translation service unavailable"],
                    ["503", "Service Unavailable", "Service is temporarily scaled down during inactivity to conserve costs and is starting up; usually takes 2-3 minutes"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-ink/5 last:border-0">
                      <td className="px-4 py-3 font-mono text-[13px] text-maroon">{row[0]}</td>
                      <td className="px-4 py-3 font-medium text-ink">{row[1]}</td>
                      <td className="px-4 py-3 text-ink-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ),
      },
    ],
  },
  {
    heading: "SDKs",
    pages: [
      {
        id: "sdk-translation",
        title: "Machine Translation SDKs",
        node: (
          <>
            <P>Official SDKs and code examples for machine translation in popular programming languages.</P>
            <H3>Python</H3>
            <CodeBlock
              label="Python"
              code={`import requests

API_URL = "${API}/api/translate"

payload = {
    "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",  # required
    "text": "Hello, how are you?",                     # required
    "to": "Swahili",                                   # required
    "from": "English",                                 # required
    "max_tokens": 5000,                                # optional, defaults to 512
    "creativity": 0.7,                                 # optional, 0.1-1
    "context": "This is a greeting in a business email",
    "glossaryId": "glossary-id-here",
    "glossary": [{"term": "source", "translation": "target"}]
}

response = requests.post(API_URL, json=payload, timeout=30)
response.raise_for_status()
data = response.json()
print("Translation:", data["translation"])`}
            />
            <H3>JavaScript</H3>
            <CodeBlock
              label="JavaScript"
              code={`const API_URL = "${API}/api/translate";

const payload = {
  token: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  text: "Hello, how are you?",
  to: "Swahili",
  from: "English",
  max_tokens: 5000,
  creativity: 0.7,
  context: "This is a greeting in a business email",
  glossaryId: "glossary-id-here",
  glossary: [{ term: "source", translation: "target" }],
};

const response = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const data = await response.json();
console.log("Translation:", data.translation);`}
            />
            <H3>cURL</H3>
            <CodeBlock
              label="cURL"
              code={`curl -X POST "${API}/api/translate" \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "text": "Hello, how are you?",
    "to": "Swahili",
    "from": "English",
    "max_tokens": 512,
    "creativity": 0.7,
    "context": "This is a greeting in a business email"
  }'`}
            />
          </>
        ),
      },
      {
        id: "sdk-transcription",
        title: "Speech Transcription SDKs",
        node: (
          <>
            <P>Official SDKs and code examples for speech transcription in popular programming languages.</P>
            <H3>Python</H3>
            <CodeBlock
              label="Python"
              code={`import requests

API_URL = "${API}/api/transcribe"
TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

files = {"audio": ("audio.wav", open("path/to/audio.wav", "rb"), "audio/wav")}
data = {"language": "English", "token": TOKEN}

response = requests.post(API_URL, files=files, data=data, timeout=300)
response.raise_for_status()
result = response.json()
print("Transcript:", result.get("transcript", ""))`}
            />
            <H3>JavaScript</H3>
            <CodeBlock
              label="JavaScript"
              code={`const API_URL = "${API}/api/transcribe";
const TOKEN = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

async function transcribeAudio(file) {
  const formData = new FormData();
  formData.append("audio", file, file.name || "audio.wav");
  formData.append("language", "English");
  formData.append("token", TOKEN);

  const response = await fetch(API_URL, { method: "POST", body: formData });
  const data = await response.json();
  console.log("Transcript:", data.transcript);
  return data;
}`}
            />
            <H3>cURL</H3>
            <CodeBlock
              label="cURL"
              code={`curl -X POST "${API}/api/transcribe" \\
  -F "audio=@path/to/audio.wav" \\
  -F "language=English" \\
  -F "token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`}
            />
          </>
        ),
      },
    ],
  },
  {
    heading: "Supported Languages",
    pages: [
      {
        id: "languages-translation",
        title: "Machine Translation",
        node: (
          <>
            <P>
              Machine translation currently supports 30+ African languages with high accuracy and
              native speaker validation. The <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">from</code> and{" "}
              <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">to</code> parameters accept either full
              language names (e.g. Swahili, English) or the codes below.
            </P>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
              <table className="w-full min-w-[360px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-cream-dark/60 text-left">
                    <th className="px-4 py-2.5 font-semibold text-ink">Code</th>
                    <th className="px-4 py-2.5 font-semibold text-ink">Language</th>
                  </tr>
                </thead>
                <tbody>
                  {mtLanguages.map(([code, lang]) => (
                    <tr key={code} className="border-b border-ink/5 last:border-0">
                      <td className="px-4 py-2.5 font-mono text-[13px] text-maroon">{code}</td>
                      <td className="px-4 py-2.5 text-ink-muted">{lang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout>
              Beta languages: Bambara, Bemba, Ewe, Kikongo, Lingala, and Twi are supported in beta.
            </Callout>
          </>
        ),
      },
      {
        id: "languages-transcription",
        title: "Speech Transcription",
        node: (
          <>
            <P>
              Speech transcription supports a growing set of African languages. Use these language
              names with the <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">/api/transcribe</code> endpoint.
            </P>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-cream-dark/60 text-left">
                    <th className="px-4 py-2.5 font-semibold text-ink">Language</th>
                    <th className="px-4 py-2.5 font-semibold text-ink">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {transcribeLanguages.map(([lang, region]) => (
                    <tr key={lang} className="border-b border-ink/5 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-ink">{lang}</td>
                      <td className="px-4 py-2.5 text-ink-muted">{region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ),
      },
    ],
  },
  {
    heading: "Pricing & Billing",
    pages: [
      {
        id: "pricing-structure",
        title: "Pricing Structure",
        node: (
          <>
            <P>Simple, transparent pricing based on character count with no hidden fees.</P>
            <div className="mt-4 rounded-2xl bg-espresso px-6 py-8 text-center">
              <p className="text-3xl font-bold text-offwhite">$100 <span className="text-lg font-medium text-offwhite/60">per 1 million characters</span></p>
              <p className="mt-1 text-sm text-offwhite/50">That&apos;s just $0.0001 per character</p>
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
              <table className="w-full min-w-[300px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-cream-dark/60 text-left">
                    <th className="px-4 py-2.5 font-semibold text-ink">Characters</th>
                    <th className="px-4 py-2.5 font-semibold text-ink">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[["1M", "$100"], ["100K", "$10"], ["10K", "$1.00"]].map((row) => (
                    <tr key={row[0]} className="border-b border-ink/5 last:border-0">
                      <td className="px-4 py-2.5 text-ink-muted">{row[0]}</td>
                      <td className="px-4 py-2.5 font-medium text-ink">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "cost-calculator",
        title: "Cost Calculator",
        node: null, // rendered specially by DocsShell
      },
    ],
  },
  {
    heading: "Security & Compliance",
    pages: [
      {
        id: "security",
        title: "Security & Compliance",
        node: (
          <>
            <P>Enterprise-grade security measures to protect your data and ensure compliance.</P>
            <H3>Data Security</H3>
            <List
              items={[
                "Data is encrypted in transit and at rest",
                "Token-based authentication",
                "Data stored for 30 days for troubleshooting",
                "Data is not sold to any third party",
              ]}
            />
            <H3>Compliance</H3>
            <List items={["GDPR compliant", "CCPA compliant", "Regular security audits"]} />
          </>
        ),
      },
    ],
  },
  {
    heading: "Integrations",
    pages: [
      {
        id: "integrations-overview",
        title: "Overview",
        node: (
          <>
            <P>Mansa connects with the tools your team already uses. Select an integration below to get started.</P>
            <List items={["Phrase - TMS & Portal integration (2 guides)", "More integrations coming soon"]} />
          </>
        ),
      },
      {
        id: "phrase-mt-profile",
        title: "Phrase: Setting Up an MT Profile",
        node: (
          <>
            <P>
              Connect Mansa to Phrase as a custom BYO (Bring Your Own) Machine Translation engine. Once
              set up, you can use Mansa directly inside Phrase TMS for African-language translation
              workflows.
            </P>
            <H3>Before You Begin</H3>
            <List
              items={[
                "An active Mansa account with at least one API token generated",
                "Access to Phrase TMS with Language AI permissions",
              ]}
            />
            <H3>Steps</H3>
            <OrderedList
              items={[
                <>Access Language AI Settings - log in to your Phrase Dashboard and navigate to TMS.</>,
                <>Navigate to Language AI in the sidebar.</>,
                <>Add MT Profile - open the MT profiles tab and click Add MT profile (or New profile).</>,
                <>Name and Create - give your profile a name (e.g. &quot;Mansa - African Languages&quot;) and click Create.</>,
                <>Add More Engines - under Fully managed, click Add more engines.</>,
                <>Select BYO Engine from the &quot;Choose MT engine to add&quot; list.</>,
                <>
                  Enter API Credentials under Edit BYO Engine:
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Base engine URL: <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">{API}/api/phrase</code></li>
                    <li>Authorization header: <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-[13px]">X-Api-Token</code></li>
                    <li>Authorization token: your Mansa API token</li>
                  </ul>
                </>,
                <>Validate Connection - click Validate connection and confirm all statuses turn green.</>,
                <>Save and Finish - click Add. Your Mansa MT profile is now ready to use.</>,
              ]}
            />
          </>
        ),
      },
      {
        id: "phrase-portal",
        title: "Phrase: Setting Up Mansa Portal",
        node: (
          <>
            <P>Create a branded, public-facing or internal translation portal powered by Mansa.</P>
            <Callout>This feature requires the Phrase Portal add-on enabled in your Phrase account.</Callout>
            <H3>Steps</H3>
            <OrderedList
              items={[
                <>Navigate to Portals - in Phrase TMS, go to Setup → Portals.</>,
                <>Create New Portal - click Create New.</>,
                <>General Settings - enter the Name and Description for your portal.</>,
                <>Select MT Profile - under Languages and resources, select the Mansa MT Profile you created earlier.</>,
                <>Languages and Access - choose supported languages and configure access settings.</>,
                <>Publish - click Save &amp; share or Publish.</>,
              ]}
            />
          </>
        ),
      },
    ],
  },
];
