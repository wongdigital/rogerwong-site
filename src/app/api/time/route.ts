import { getTimezoneOffset } from 'date-fns-tz'
import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()
  const etOffset = getTimezoneOffset('America/New_York')
  const etTime = new Date(now.getTime() - etOffset)

  return NextResponse.json({
    serverTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    serverLocalTime: now.toString(),
    serverUTCTime: now.toUTCString(),
    serverISOTime: now.toISOString(),
    easternTime: etTime.toString()
  })
}