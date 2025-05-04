async function main(args: string[]) {
  if (args.length !== 1) {
    throw new Error(`1 argument required, got ${args.length}`);
  }
  const dbName = args.at(0)!;

  const db = await Deno.openKv(dbName.length ? dbName : undefined);
  const entries = db.list({ prefix: [] });
  for await (const entry of entries) {
    db.delete(entry.key);
  }

  console.log(`Deno kv ${dbName} truncated`);
  return 0;
}

await main(Deno.args);
