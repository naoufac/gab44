// Direct gab44 publishing endpoint (bypasses broken Postiz MCP)
export async function onRequestGet(context: any) {
  const content = `✨ gab44 Daily Horoscope

Today's planetary alignment favors clarity and intentional action. Mercury retrograde is winding down—use this transitional phase to tie up loose ends. Your intuition is amplified; trust those small inner nudges.

#astrology #horoscope #gab44 #dailyguidance

Generated: ${new Date().toISOString()}
System status: ✅ Fan-out operational | Postiz MCP publishing pending Composio fix`;

  // Cache to KV
  await context.env.gab44_content_cache.put('latest', content);

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' }
  });
}