// Homestead pack tweak: alternative redstone processing.
// Spelunkery's grindstone polishing is broken by KubeJS (Spelunkery issue #152),
// leaving Create crushing as the only path. This adds furnace/blast-furnace
// smelting of Rough Cinnabar -> Redstone so redstone is reachable without Create.
ServerEvents.recipes(event => {
  // Rough Cinnabar (the redstone-ore drop) -> 2 Redstone
  event.smelting('2x minecraft:redstone', 'spelunkery:rough_cinnabar').xp(0.7)
  event.blasting('2x minecraft:redstone', 'spelunkery:rough_cinnabar').xp(0.7)

  // Refined Cinnabar -> 1 Redstone (in case you have refined stacks)
  event.smelting('minecraft:redstone', 'spelunkery:cinnabar').xp(0.5)
  event.blasting('minecraft:redstone', 'spelunkery:cinnabar').xp(0.5)
})
