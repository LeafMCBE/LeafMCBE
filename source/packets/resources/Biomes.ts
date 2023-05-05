export default {
  nbt: {
    type: 'compound',
    name: '',
    value: {
      bamboo_jungle: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'bamboo_jungle_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'bamboo_jungle'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'bamboo', 'jungle', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7725490927696228
          },
          waterColorG: {
            type: 'float',
            value: 0.6352941393852234
          },
          waterColorR: {
            type: 'float',
            value: 0.0784313753247261
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      bamboo_jungle_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'bamboo_jungle_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bamboo',
                'hills',
                'jungle',
                'monster',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.847058892250061
          },
          waterColorG: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorR: {
            type: 'float',
            value: 0.10588236153125763
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      basalt_deltas: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:capped_surface': {
            type: 'compound',
            value: {
              ceilingMaterials: {
                type: 'list',
                value: {
                  type: 'int',
                  value: [6130]
                }
              },
              floorMaterials: {
                type: 'list',
                value: {
                  type: 'int',
                  value: [6130, 11763]
                }
              },
              foundationMaterial: {
                type: 'int',
                value: 10815
              },
              seaMaterial: {
                type: 'int',
                value: 5203
              }
            }
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 2
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'basalt_deltas'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'basalt_deltas',
                'nether',
                'spawn_ghast',
                'spawn_many_magma_cubes'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8941177129745483
          },
          waterColorG: {
            type: 'float',
            value: 0.46274513006210327
          },
          waterColorR: {
            type: 'float',
            value: 0.24705883860588074
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 2
          }
        }
      },
      beach: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'beach'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['beach', 'monster', 'overworld', 'warm']
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6705882549285889
          },
          waterColorG: {
            type: 'float',
            value: 0.4862745404243469
          },
          waterColorR: {
            type: 'float',
            value: 0.08235294371843338
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      birch_forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.6000000238418579
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.6000000238418579
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.6000000238418579
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'birch_forest_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'birch_forest_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'birch_forest'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bee_habitat',
                'birch',
                'forest',
                'monster',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.6000000238418579
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8078432083129883
          },
          waterColorG: {
            type: 'float',
            value: 0.46666669845581055
          },
          waterColorR: {
            type: 'float',
            value: 0.02352941408753395
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      birch_forest_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.6000000238418579
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.6000000238418579
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.6000000238418579
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'birch_forest_hills_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'birch_forest_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bee_habitat',
                'birch',
                'forest',
                'hills',
                'monster',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.6000000238418579
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7686275243759155
          },
          waterColorG: {
            type: 'float',
            value: 0.4549019932746887
          },
          waterColorR: {
            type: 'float',
            value: 0.03921568766236305
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      birch_forest_hills_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.550000011920929
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'birch_forest_hills_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'birch',
                'forest',
                'hills',
                'monster',
                'mutated',
                'overworld_generation'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7686275243759155
          },
          waterColorG: {
            type: 'float',
            value: 0.4549019932746887
          },
          waterColorR: {
            type: 'float',
            value: 0.03921568766236305
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      birch_forest_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.6000000238418579
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.6000000238418579
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.6000000238418579
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'birch_forest_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bee_habitat',
                'birch',
                'forest',
                'monster',
                'mutated',
                'overworld_generation'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.6000000238418579
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8078432083129883
          },
          waterColorG: {
            type: 'float',
            value: 0.46666669845581055
          },
          waterColorR: {
            type: 'float',
            value: 0.02352941408753395
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      cold_beach: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: 0.05000000074505806
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'cold_beach'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['beach', 'cold', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.05000000074505806
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6470588445663452
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.0784313753247261
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      cold_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'cold_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['cold', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7882353663444519
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.125490203499794
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      cold_taiga: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.5
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 4
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_taiga_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_taiga_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'cold_taiga'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'cold',
                'forest',
                'monster',
                'overworld',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5137255191802979
          },
          waterColorG: {
            type: 'float',
            value: 0.3686274588108063
          },
          waterColorR: {
            type: 'float',
            value: 0.125490203499794
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      cold_taiga_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.5
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'cold_taiga_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'cold',
                'forest',
                'hills',
                'monster',
                'overworld',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.4705882668495178
          },
          waterColorG: {
            type: 'float',
            value: 0.35686275362968445
          },
          waterColorR: {
            type: 'float',
            value: 0.1411764770746231
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      cold_taiga_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.30000001192092896
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: -0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'cold_taiga_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'cold',
                'forest',
                'monster',
                'mutated',
                'overworld_generation',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5137255191802979
          },
          waterColorG: {
            type: 'float',
            value: 0.3686274588108063
          },
          waterColorR: {
            type: 'float',
            value: 0.125490203499794
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      crimson_forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'crimson_forest'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0.25
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'crimson_forest',
                'nether',
                'netherwart_forest',
                'spawn_few_zombified_piglins',
                'spawn_piglin'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.34117648005485535
          },
          waterColorG: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorR: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_cold_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1.7999999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_cold_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_cold_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_cold_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['cold', 'deep', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7882353663444519
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.125490203499794
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_dark: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_dark'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['caves', 'deep_dark', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_frozen_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1.7999999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:frozen_ocean_surface': {
            type: 'compound',
            value: {
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:dirt'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:grass'
                  }
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 4
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_frozen_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['deep', 'frozen', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7098039388656616
          },
          waterColorG: {
            type: 'float',
            value: 0.4392157196998596
          },
          waterColorR: {
            type: 'float',
            value: 0.14509804546833038
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_lukewarm_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1.7999999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 2
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_lukewarm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_lukewarm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_lukewarm_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['deep', 'lukewarm', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8588235974311829
          },
          waterColorG: {
            type: 'float',
            value: 0.5882353186607361
          },
          waterColorR: {
            type: 'float',
            value: 0.05098039656877518
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1.7999999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'plains'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    },
                    {
                      biome: {
                        type: 'string',
                        value: 'forest'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['deep', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8313726186752319
          },
          waterColorG: {
            type: 'float',
            value: 0.529411792755127
          },
          waterColorR: {
            type: 'float',
            value: 0.09019608050584793
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      deep_warm_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1.7999999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_warm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_warm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'deep_warm_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['deep', 'monster', 'ocean', 'overworld', 'warm']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8980392813682556
          },
          waterColorG: {
            type: 'float',
            value: 0.6901960968971252
          },
          waterColorR: {
            type: 'float',
            value: 0.007843137718737125
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      desert: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.125
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.05000000074505806
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"ice_plains"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'extreme_hills_plus_trees'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 3
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'desert_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'desert_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"ice_plains"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'extreme_hills_plus_trees'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'desert'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['desert', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5960784554481506
          },
          waterColorG: {
            type: 'float',
            value: 0.6470588445663452
          },
          waterColorR: {
            type: 'float',
            value: 0.19607844948768616
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      desert_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'desert_hills'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['desert', 'hills', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6313725709915161
          },
          waterColorG: {
            type: 'float',
            value: 0.4784314036369324
          },
          waterColorR: {
            type: 'float',
            value: 0.10196079313755035
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      desert_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.22499999403953552
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.25
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'desert_mutated'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['desert', 'monster', 'mutated', 'overworld_generation']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5960784554481506
          },
          waterColorG: {
            type: 'float',
            value: 0.6470588445663452
          },
          waterColorR: {
            type: 'float',
            value: 0.19607844948768616
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      dripstone_caves: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'dripstone_caves'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['caves', 'dripstone_caves', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      extreme_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":3,"subject":0,"test":"is_temperature_value","value":0.2000000029802322},{"operator":4,"subject":0,"test":"is_temperature_value","value":1.0}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'extreme_hills_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    },
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'extreme_hills_plus_trees'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'extreme_hills_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":3,"subject":0,"test":"is_temperature_value","value":0.2000000029802322},{"operator":4,"subject":0,"test":"is_temperature_value","value":1.0}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'extreme_hills_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'stone_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'extreme_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'extreme_hills', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.9686275124549866
          },
          waterColorG: {
            type: 'float',
            value: 0.48235297203063965
          },
          waterColorR: {
            type: 'float',
            value: 0
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      extreme_hills_edge: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.800000011920929
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'stone_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'extreme_hills_edge'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'edge',
                'extreme_hills',
                'monster',
                'mountain',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8352941870689392
          },
          waterColorG: {
            type: 'float',
            value: 0.3607843220233917
          },
          waterColorR: {
            type: 'float',
            value: 0.01568627543747425
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      extreme_hills_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'extreme_hills_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'extreme_hills',
                'monster',
                'mutated',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6705882549285889
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.05490196496248245
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      extreme_hills_plus_trees: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'extreme_hills_plus_trees_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'stone_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'extreme_hills_plus_trees'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'extreme_hills',
                'forest',
                'monster',
                'mountain',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6705882549285889
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.05490196496248245
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      extreme_hills_plus_trees_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'extreme_hills_plus_trees_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'extreme_hills',
                'forest',
                'monster',
                'mutated',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6705882549285889
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.05490196496248245
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      flower_forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'flower_forest'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'bee_habitat',
                'flower_forest',
                'monster',
                'mutated',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8000000715255737
          },
          waterColorG: {
            type: 'float',
            value: 0.6392157077789307
          },
          waterColorR: {
            type: 'float',
            value: 0.125490203499794
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    },
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'forest_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'flower_forest'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'forest'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'bee_habitat', 'forest', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.9490196704864502
          },
          waterColorG: {
            type: 'float',
            value: 0.5921568870544434
          },
          waterColorR: {
            type: 'float',
            value: 0.11764706671237946
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      forest_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'forest_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bee_habitat',
                'forest',
                'hills',
                'monster',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8196079134941101
          },
          waterColorG: {
            type: 'float',
            value: 0.41960787773132324
          },
          waterColorR: {
            type: 'float',
            value: 0.019607843831181526
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      frozen_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:frozen_ocean_surface': {
            type: 'compound',
            value: {
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:dirt'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:grass'
                  }
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 4
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'frozen_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7098039388656616
          },
          waterColorG: {
            type: 'float',
            value: 0.4392157196998596
          },
          waterColorR: {
            type: 'float',
            value: 0.14509804546833038
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      frozen_peaks: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 1
              },
              northSlopes: {
                type: 'byte',
                value: 1
              },
              peaksFactor: {
                type: 'float',
                value: 0
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:packed_ice'
                  }
                }
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 1
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'frozen_peaks'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'frozen',
                'frozen_peaks',
                'monster',
                'mountains',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      frozen_river: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -0.5
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'frozen_river'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'overworld', 'river']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterColorG: {
            type: 'float',
            value: 0.32549020648002625
          },
          waterColorR: {
            type: 'float',
            value: 0.0941176563501358
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      grove: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 0
              },
              northSlopes: {
                type: 'byte',
                value: 0
              },
              peaksFactor: {
                type: 'float',
                value: 0
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {}
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 0
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'grove'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['cold', 'grove', 'monster', 'mountains', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: -0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      hell: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'hell'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'nether',
                'nether_wastes',
                'spawn_endermen',
                'spawn_few_piglins',
                'spawn_ghast',
                'spawn_magma_cubes',
                'spawn_zombified_piglin'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.34117648005485535
          },
          waterColorG: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorR: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      ice_mountains: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 1.5
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.375
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'ice_mountains'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'ice', 'mountain', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6549019813537598
          },
          waterColorG: {
            type: 'float',
            value: 0.33725491166114807
          },
          waterColorR: {
            type: 'float',
            value: 0.06666667014360428
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      ice_plains: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.125
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.05000000074505806
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 1
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.25
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 4
                      },
                      weight: {
                        type: 'int',
                        value: 3
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'ice_mountains'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'ice_plains_spikes'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'frozen_river'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'ice_plains'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'ice', 'ice_plains', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6078431606292725
          },
          waterColorG: {
            type: 'float',
            value: 0.3333333432674408
          },
          waterColorR: {
            type: 'float',
            value: 0.0784313753247261
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      ice_plains_spikes: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.42500001192092896
          },
          downfall: {
            type: 'float',
            value: 1
          },
          height: {
            type: 'float',
            value: 0.44999998807907104
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 1
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 1.5
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.5
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'ice_plains_spikes'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'ice_plains', 'monster', 'mutated', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jagged_peaks: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 1
              },
              northSlopes: {
                type: 'byte',
                value: 1
              },
              peaksFactor: {
                type: 'float',
                value: 1
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 0
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jagged_peaks'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'frozen',
                'jagged_peaks',
                'monster',
                'mountains',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jungle: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'jungle_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'jungle_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jungle'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'jungle', 'monster', 'overworld', 'rare']
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7725490927696228
          },
          waterColorG: {
            type: 'float',
            value: 0.6352941393852234
          },
          waterColorR: {
            type: 'float',
            value: 0.0784313753247261
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jungle_edge: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'jungle_edge_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jungle_edge'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'edge', 'jungle', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8901961445808411
          },
          waterColorG: {
            type: 'float',
            value: 0.5411764979362488
          },
          waterColorR: {
            type: 'float',
            value: 0.05098039656877518
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jungle_edge_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jungle_edge_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'edge',
                'jungle',
                'monster',
                'mutated',
                'overworld_generation'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8901961445808411
          },
          waterColorG: {
            type: 'float',
            value: 0.5411764979362488
          },
          waterColorR: {
            type: 'float',
            value: 0.05098039656877518
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jungle_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jungle_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'hills', 'jungle', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.847058892250061
          },
          waterColorG: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorR: {
            type: 'float',
            value: 0.10588236153125763
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      jungle_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.949999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"},{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"forest"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"hills"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mega"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"birch"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'jungle_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'jungle',
                'monster',
                'mutated',
                'overworld_generation'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.949999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.847058892250061
          },
          waterColorG: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorR: {
            type: 'float',
            value: 0.10588236153125763
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      legacy_frozen_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: 0
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'legacy_frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'legacy_frozen_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'legacy_frozen_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['frozen', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      lukewarm_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 2
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'lukewarm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'lukewarm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'lukewarm_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['lukewarm', 'monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8588235974311829
          },
          waterColorG: {
            type: 'float',
            value: 0.5882353186607361
          },
          waterColorR: {
            type: 'float',
            value: 0.05098039656877518
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      lush_caves: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.8999999761581421
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'lush_caves'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['caves', 'lush_caves', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.8999999761581421
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mangrove_swamp: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:swamp_surface': {
            type: 'compound',
            value: {
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:mud'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:mud'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:mud'
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mangrove_swamp'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mangrove_swamp', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      meadow: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.30000001192092896
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 0
              },
              northSlopes: {
                type: 'byte',
                value: 0
              },
              peaksFactor: {
                type: 'float',
                value: 0
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {}
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 0
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'meadow'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'bee_habitat',
                'meadow',
                'monster',
                'mountains',
                'overworld'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.30000001192092896
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mega_taiga: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.30000001192092896
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"taiga"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'taiga'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mega_taiga_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'redwood_taiga_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"taiga"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'taiga'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mega_taiga'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'mega',
                'monster',
                'overworld',
                'rare',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.30000001192092896
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.46666669845581055
          },
          waterColorG: {
            type: 'float',
            value: 0.4274510145187378
          },
          waterColorR: {
            type: 'float',
            value: 0.1764705926179886
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mega_taiga_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.30000001192092896
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'redwood_taiga_hills_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mega_taiga_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'hills',
                'mega',
                'monster',
                'overworld',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.30000001192092896
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.4705882668495178
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.1568627506494522
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 0
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 0
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'desert'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa_bryce'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mesa', 'monster', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5058823823928833
          },
          waterColorG: {
            type: 'float',
            value: 0.49803924560546875
          },
          waterColorR: {
            type: 'float',
            value: 0.30588236451148987
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa_bryce: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 1
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 0
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa_bryce'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'mesa', 'monster', 'mutated', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7725490927696228
          },
          waterColorG: {
            type: 'float',
            value: 0.6352941393852234
          },
          waterColorR: {
            type: 'float',
            value: 0.0784313753247261
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa_plateau: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1.5
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"plateau"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'mesa'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 0
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 0
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa_plateau_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"plateau"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'mesa'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa_plateau'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mesa', 'monster', 'overworld', 'plateau', 'rare']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.3333333432674408
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa_plateau_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 0
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 0
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa_plateau_mutated'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'mesa',
                'monster',
                'mutated',
                'overworld',
                'plateau',
                'stone'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.3333333432674408
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa_plateau_stone: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1.5
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"plateau"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'mesa'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 0
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 1
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              extended_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"ocean"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'desert'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 2
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa_plateau_stone_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"operator":1,"subject":0,"test":"has_biome_tag","value":"plateau"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mesa"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"mutated"}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'mesa'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mesa_plateau_stone'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa_plateau_stone'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'mesa',
                'monster',
                'overworld',
                'plateau',
                'rare',
                'stone'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.3333333432674408
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mesa_plateau_stone_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mesa_surface': {
            type: 'compound',
            value: {
              brycePillars: {
                type: 'byte',
                value: 0
              },
              clayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stained_hardened_clay'
                  }
                }
              },
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              hardClayMaterial: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              hasForest: {
                type: 'byte',
                value: 0
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:hardened_clay'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:sand'
                  },
                  states: {
                    type: 'list',
                    value: {
                      type: 'compound',
                      value: [
                        {
                          state: {
                            type: 'string',
                            value: 'sand_type'
                          },
                          value: {
                            type: 'int',
                            value: 1
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mesa_plateau_stone_mutated'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mesa', 'monster', 'mutated', 'overworld', 'plateau']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorG: {
            type: 'float',
            value: 0.501960813999176
          },
          waterColorR: {
            type: 'float',
            value: 0.3333333432674408
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mushroom_island: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 1
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 1
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.8999999761581421
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mushroom_island_shore'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mushroom_island_shore'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mushroom_island'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mooshroom_island', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.8999999761581421
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5921568870544434
          },
          waterColorG: {
            type: 'float',
            value: 0.5372549295425415
          },
          waterColorR: {
            type: 'float',
            value: 0.5411764979362488
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      mushroom_island_shore: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0
          },
          downfall: {
            type: 'float',
            value: 1
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 1
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.8999999761581421
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'mushroom_island_shore'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'mushroom_island_shore'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['mooshroom_island', 'overworld', 'shore']
            }
          },
          temperature: {
            type: 'float',
            value: 0.8999999761581421
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5764706134796143
          },
          waterColorG: {
            type: 'float',
            value: 0.5058823823928833
          },
          waterColorR: {
            type: 'float',
            value: 0.5058823823928833
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'deep_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['monster', 'ocean', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8313726186752319
          },
          waterColorG: {
            type: 'float',
            value: 0.529411792755127
          },
          waterColorR: {
            type: 'float',
            value: 0.09019608050584793
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      plains: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.125
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.05000000074505806
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 3
                      }
                    },
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    },
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'forest_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    },
                    {
                      biome: {
                        type: 'string',
                        value: 'forest'
                      },
                      weight: {
                        type: 'int',
                        value: 2
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'sunflower_plains'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'plains'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'bee_habitat', 'monster', 'overworld', 'plains']
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.960784375667572
          },
          waterColorG: {
            type: 'float',
            value: 0.686274528503418
          },
          waterColorR: {
            type: 'float',
            value: 0.2666666805744171
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      redwood_taiga_hills_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.550000011920929
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.5
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.30000001192092896
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'redwood_taiga_hills_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'hills',
                'mega',
                'monster',
                'mutated',
                'overworld_generation',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.30000001192092896
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.4705882668495178
          },
          waterColorG: {
            type: 'float',
            value: 0.38823533058166504
          },
          waterColorR: {
            type: 'float',
            value: 0.1568627506494522
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      redwood_taiga_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.25
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'redwood_taiga_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'mega',
                'monster',
                'mutated',
                'overworld',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.25
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.46666669845581055
          },
          waterColorG: {
            type: 'float',
            value: 0.4274510145187378
          },
          waterColorR: {
            type: 'float',
            value: 0.1764705926179886
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      river: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -0.5
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'river'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'river'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['overworld', 'river']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.5176470875740051
          },
          waterColorR: {
            type: 'float',
            value: 0
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      roofed_forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'plains'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'roofed_forest_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'roofed_forest'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'monster',
                'no_legacy_worldgen',
                'overworld',
                'roofed'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8196079134941101
          },
          waterColorG: {
            type: 'float',
            value: 0.4235294461250305
          },
          waterColorR: {
            type: 'float',
            value: 0.23137256503105164
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      roofed_forest_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.699999988079071
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'roofed_forest_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'monster',
                'mutated',
                'overworld_generation',
                'roofed'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.699999988079071
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8196079134941101
          },
          waterColorG: {
            type: 'float',
            value: 0.4235294461250305
          },
          waterColorR: {
            type: 'float',
            value: 0.23137256503105164
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      savanna: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.125
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.05000000074505806
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 1.2000000476837158
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 2
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'savanna_plateau'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'savanna_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'savanna'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'monster', 'overworld', 'savanna']
            }
          },
          temperature: {
            type: 'float',
            value: 1.2000000476837158
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6117647290229797
          },
          waterColorG: {
            type: 'float',
            value: 0.545098066329956
          },
          waterColorR: {
            type: 'float',
            value: 0.1725490242242813
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      savanna_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.36250001192092896
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 1.225000023841858
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'savanna_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'monster', 'mutated', 'overworld', 'savanna']
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      savanna_plateau: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1.5
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.02500000037252903
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 1
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'savanna_plateau_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'savanna_plateau'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'monster', 'overworld', 'plateau', 'savanna']
            }
          },
          temperature: {
            type: 'float',
            value: 1
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.658823549747467
          },
          waterColorG: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterColorR: {
            type: 'float',
            value: 0.14509804546833038
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      savanna_plateau_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 1.0499999523162842
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 1.212499976158142
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 1
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'savanna_plateau_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'monster',
                'mutated',
                'overworld',
                'plateau',
                'savanna'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 1
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      snowy_slopes: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.8999999761581421
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.8999999761581421
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.5
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0.125
              },
              temperature: {
                type: 'float',
                value: -0.30000001192092896
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 1
              },
              northSlopes: {
                type: 'byte',
                value: 1
              },
              peaksFactor: {
                type: 'float',
                value: 0
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 0
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'cold_beach'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'snowy_slopes'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'frozen',
                'monster',
                'mountains',
                'overworld',
                'snowy_slopes'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: -0.30000001192092896
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      soulsand_valley: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0.05000000074505806
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:capped_surface': {
            type: 'compound',
            value: {
              beachMaterial: {
                type: 'int',
                value: 12466
              },
              ceilingMaterials: {
                type: 'list',
                value: {
                  type: 'int',
                  value: [8413, 8412]
                }
              },
              floorMaterials: {
                type: 'list',
                value: {
                  type: 'int',
                  value: [8413, 8412]
                }
              },
              foundationMaterial: {
                type: 'int',
                value: 10815
              },
              seaMaterial: {
                type: 'int',
                value: 5203
              }
            }
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0.05000000074505806
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'soulsand_valley'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'nether',
                'soulsand_valley',
                'spawn_endermen',
                'spawn_ghast'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.34117648005485535
          },
          waterColorG: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorR: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      stone_beach: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.800000011920929
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.20000000298023224
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'stone_beach'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['beach', 'monster', 'overworld', 'stone']
            }
          },
          temperature: {
            type: 'float',
            value: 0.20000000298023224
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.7333333492279053
          },
          waterColorG: {
            type: 'float',
            value: 0.40392160415649414
          },
          waterColorR: {
            type: 'float',
            value: 0.05098039656877518
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      stony_peaks: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.30000001192092896
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.30000001192092896
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 1
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:mountain_parameters': {
            type: 'compound',
            value: {
              eastSlopes: {
                type: 'byte',
                value: 1
              },
              northSlopes: {
                type: 'byte',
                value: 1
              },
              peaksFactor: {
                type: 'float',
                value: 1
              },
              southSlopes: {
                type: 'byte',
                value: 0
              },
              steepBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              topSlideEnalbed: {
                type: 'byte',
                value: 0
              },
              westSlopes: {
                type: 'byte',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'stony_peaks'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['monster', 'mountains', 'overworld']
            }
          },
          temperature: {
            type: 'float',
            value: 1
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      sunflower_plains: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.125
          },
          downfall: {
            type: 'float',
            value: 0.4000000059604645
          },
          height: {
            type: 'float',
            value: 0.05000000074505806
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.4000000059604645
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'sunflower_plains'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'bee_habitat',
                'monster',
                'mutated',
                'overworld',
                'plains'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 1
          },
          waterColorB: {
            type: 'float',
            value: 1
          },
          waterColorG: {
            type: 'float',
            value: 0.7176470756530762
          },
          waterColorR: {
            type: 'float',
            value: 0.3764706254005432
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      swampland: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:legacy_world_generation_rules': {
            type: 'compound',
            value: {
              legacy_pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'end',
                  value: []
                }
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 0
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'swampland_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              pre_hills_edge_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"any_of":[{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"desert"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"hills"}]},{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"taiga"},{"operator":0,"subject":0,"test":"has_biome_tag","value":"cold"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"hills"}]},{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"ice_plains"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"}]}]}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'plains'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      condition: {
                        type: 'string',
                        value:
                          '{"all_of":[{"operator":0,"subject":0,"test":"has_biome_tag","value":"jungle"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"mutated"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"edge"},{"operator":1,"subject":0,"test":"has_biome_tag","value":"hills"}]}\n'
                      },
                      min_passing_neighbors: {
                        type: 'int',
                        value: 1
                      },
                      transforms_into: {
                        type: 'list',
                        value: {
                          type: 'compound',
                          value: [
                            {
                              biome: {
                                type: 'string',
                                value: 'jungle_edge'
                              },
                              weight: {
                                type: 'int',
                                value: 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'swampland'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          'minecraft:swamp_surface': {
            type: 'compound',
            value: {
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:dirt'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:grass'
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'swampland'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'monster', 'overworld', 'swamp']
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorG: {
            type: 'float',
            value: 0.3960784673690796
          },
          waterColorR: {
            type: 'float',
            value: 0.2980392277240753
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      swampland_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.800000011920929
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:swamp_surface': {
            type: 'compound',
            value: {
              foundationBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:stone'
                  }
                }
              },
              midBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:dirt'
                  }
                }
              },
              seaBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:water'
                  }
                }
              },
              seaFloorBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:gravel'
                  }
                }
              },
              seaFloorDepth: {
                type: 'int',
                value: 7
              },
              topBlock: {
                type: 'compound',
                value: {
                  name: {
                    type: 'string',
                    value: 'minecraft:grass'
                  }
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'swampland_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'monster',
                'mutated',
                'overworld_generation',
                'swamp'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.800000011920929
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorG: {
            type: 'float',
            value: 0.3960784673690796
          },
          waterColorR: {
            type: 'float',
            value: 0.2980392277240753
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      taiga: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.25
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 3
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              hills_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'taiga_hills'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              mutate_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'taiga_mutated'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'taiga'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['animal', 'forest', 'monster', 'overworld', 'taiga']
            }
          },
          temperature: {
            type: 'float',
            value: 0.25
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5098039507865906
          },
          waterColorG: {
            type: 'float',
            value: 0.4392157196998596
          },
          waterColorR: {
            type: 'float',
            value: 0.1568627506494522
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      taiga_hills: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.44999998807907104
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.30000001192092896
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.25
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.25
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'taiga_hills'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'hills',
                'monster',
                'overworld',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.25
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5137255191802979
          },
          waterColorG: {
            type: 'float',
            value: 0.3960784673690796
          },
          waterColorR: {
            type: 'float',
            value: 0.13725490868091583
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      taiga_mutated: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.20000000298023224
          },
          downfall: {
            type: 'float',
            value: 0.800000011920929
          },
          height: {
            type: 'float',
            value: 0.4000000059604645
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.800000011920929
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.25
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'taiga_mutated'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'animal',
                'forest',
                'monster',
                'mutated',
                'overworld_generation',
                'taiga'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 0.25
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.5098039507865906
          },
          waterColorG: {
            type: 'float',
            value: 0.41960787773132324
          },
          waterColorR: {
            type: 'float',
            value: 0.11764706671237946
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      the_end: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:the_end_surface': {
            type: 'compound',
            value: {}
          },
          name_hash: {
            type: 'string',
            value: 'the_end'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['the_end']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.6196078658103943
          },
          waterColorG: {
            type: 'float',
            value: 0.32156863808631897
          },
          waterColorR: {
            type: 'float',
            value: 0.38431376218795776
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      warm_ocean: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0
          },
          depth: {
            type: 'float',
            value: -1
          },
          downfall: {
            type: 'float',
            value: 0.5
          },
          height: {
            type: 'float',
            value: 0.10000000149011612
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0
              },
              downfall: {
                type: 'float',
                value: 0.5
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 0.5
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          'minecraft:overworld_generation_rules': {
            type: 'compound',
            value: {
              generate_for_climates: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      temperature: {
                        type: 'int',
                        value: 1
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              river_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'warm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              },
              shore_transformation: {
                type: 'list',
                value: {
                  type: 'compound',
                  value: [
                    {
                      biome: {
                        type: 'string',
                        value: 'warm_ocean'
                      },
                      weight: {
                        type: 'int',
                        value: 1
                      }
                    }
                  ]
                }
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'warm_ocean'
          },
          rain: {
            type: 'byte',
            value: 1
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: ['monster', 'ocean', 'overworld', 'warm']
            }
          },
          temperature: {
            type: 'float',
            value: 0.5
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.8980392813682556
          },
          waterColorG: {
            type: 'float',
            value: 0.6901960968971252
          },
          waterColorR: {
            type: 'float',
            value: 0.007843137718737125
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      },
      warped_forest: {
        type: 'compound',
        value: {
          ash: {
            type: 'float',
            value: 0
          },
          blue_spores: {
            type: 'float',
            value: 0.25
          },
          depth: {
            type: 'float',
            value: 0.10000000149011612
          },
          downfall: {
            type: 'float',
            value: 0
          },
          height: {
            type: 'float',
            value: 0.20000000298023224
          },
          'minecraft:climate': {
            type: 'compound',
            value: {
              ash: {
                type: 'float',
                value: 0
              },
              blue_spores: {
                type: 'float',
                value: 0.25
              },
              downfall: {
                type: 'float',
                value: 0
              },
              red_spores: {
                type: 'float',
                value: 0
              },
              snow_accumulation_max: {
                type: 'float',
                value: 0.125
              },
              snow_accumulation_min: {
                type: 'float',
                value: 0
              },
              temperature: {
                type: 'float',
                value: 2
              },
              white_ash: {
                type: 'float',
                value: 0
              }
            }
          },
          name_hash: {
            type: 'string',
            value: 'warped_forest'
          },
          rain: {
            type: 'byte',
            value: 0
          },
          red_spores: {
            type: 'float',
            value: 0
          },
          tags: {
            type: 'list',
            value: {
              type: 'string',
              value: [
                'nether',
                'netherwart_forest',
                'spawn_endermen',
                'warped_forest'
              ]
            }
          },
          temperature: {
            type: 'float',
            value: 2
          },
          waterColorA: {
            type: 'float',
            value: 0.6499999761581421
          },
          waterColorB: {
            type: 'float',
            value: 0.34117648005485535
          },
          waterColorG: {
            type: 'float',
            value: 0.3490196168422699
          },
          waterColorR: {
            type: 'float',
            value: 0.5647059082984924
          },
          waterTransparency: {
            type: 'float',
            value: 0.6499999761581421
          },
          white_ash: {
            type: 'float',
            value: 0
          }
        }
      }
    }
  }
}
