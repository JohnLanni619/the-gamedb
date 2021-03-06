const { gql } = require("apollo-server");

module.exports = gql`
  type GameList {
    count: Int
    next_page: String
    previous_page: String
    results: [Game]!
  }

  type ScreenshotList {
    count: Int
    next: String
    previous: String
    list: [Screenshot]
  }

  type Game {
    id: ID!
    title: String!
    released: String
    background_image: String
    background_image_additional: String
    website: String
    metacritic: Int
    description: String
    platforms: [Platform]
  }

  type Screenshot {
    screenshot_id: ID
    image: String!
    width: Int
    height: Int
    is_deleted: String
  }

  type Platform {
    platform_id: ID
    platform_name: String
  }

  type PlatformList {
    count: Int
    next: String
    previous: String
    results: [Platform]
  }

  type PlatformDetails {
    id: ID!
    name: String!
    games_count: Int
    description: String!
  }

  type Query {
    gamesList(page: Int, ordering: String, search: String): GameList
    game(id: ID!): Game!
    screenshotList(id: ID!): ScreenshotList
    platforms: PlatformList
    platform(id: ID!): PlatformDetails
  }
`;
