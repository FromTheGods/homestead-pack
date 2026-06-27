// Make the spyglass craftable with ANY gem instead of only an amethyst shard.
// Uses the balm:gems tag (amethyst + diamond/emerald/quartz + modded gems) so it's
// accommodating across the pack's mods. The original vanilla amethyst recipe still works.
ServerEvents.recipes(event => {
  event.shaped('minecraft:spyglass', [
    'G',
    'C',
    'C'
  ], {
    G: '#balm:gems',
    C: '#c:copper_ingots'
  })
})
