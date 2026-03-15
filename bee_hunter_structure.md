# Bee Hunter Database Structure Documentation

## 1. USERS
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each user
  - username (VARCHAR) - The username of the user
  - email (VARCHAR) - The email address of the user
  - password (VARCHAR) - The encrypted password of the user
  - created_at (DATETIME) - Timestamp of user creation

- **Example:**
  | id | username   | email               | password               | created_at           |
  |----|------------|---------------------|------------------------|----------------------|
  | 1  | john_doe  | john@example.com    | encrypted_password_1   | 2023-01-01 10:00:00  |

## 2. EXPERIENCES
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each experience
  - user_id (INT, Foreign Key) - Reference to the user who created the experience
  - title (VARCHAR) - Title of the experience
  - description (TEXT) - Description of the experience
  - created_at (DATETIME) - Timestamp of experience creation

- **Example:**
  | id | user_id | title            | description               | created_at           |
  |----|---------|------------------|----------------------------|----------------------|
  | 1  | 1       | Bee Catching     | A day spent catching bees. | 2023-02-01 12:30:00  |

## 3. CATEGORIES
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each category
  - name (VARCHAR) - Name of the category
  - description (TEXT) - Description of the category

- **Example:**
  | id | name         | description                       |
  |----|--------------|-----------------------------------|
  | 1  | Outdoor      | Activities to do outdoors         |

## 4. PARTNERS
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each partner
  - name (VARCHAR) - Name of the partner
  - contact_info (VARCHAR) - Contact information for the partner

- **Example:**
  | id | name             | contact_info           |
  |----|------------------|------------------------|
  | 1  | Bee Conservation  | contact@bee.org        |

## 5. BADGES
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each badge
  - name (VARCHAR) - Name of the badge
  - description (TEXT) - Description of criteria to earn the badge

- **Example:**
  | id | name        | description                   |
  |----|-------------|-------------------------------|
  | 1  | Bee Lover  | Earned after first bee catch. |

## 6. CHALLENGES
- **Columns:**
  - id (INT, Primary Key) - Unique identifier for each challenge
  - title (VARCHAR) - Title of the challenge
  - description (TEXT) - Description of the challenge
  - reward (VARCHAR) - Reward for completing the challenge

- **Example:**
  | id | title           | description                   | reward         |
  |----|------------------|-------------------------------|-----------------|
  | 1  | Bee Awareness   | Spread awareness about bees.  | Badge           |

## App Flow Diagram
[Insert app flow diagram here]