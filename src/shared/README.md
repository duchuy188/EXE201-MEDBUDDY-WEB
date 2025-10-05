
# HAP MEDBUDDY - Shared Code

Thư mục này chứa code được chia sẻ giữa Web App và Mobile App (React Native).

## Cấu trúc

```
src/shared/
├── types/           # TypeScript type definitions
│   ├── user.ts      # User và authentication types
│   ├── medicine.ts  # Medicine và reminder types  
│   ├── health.ts    # Health monitoring types
│   └── voice.ts     # Voice message types
├── constants/       # App constants
│   └── app.ts       # Configuration và constants
├── utils/           # Utility functions
│   ├── validation.ts # Zod validation schemas
│   └── helpers.ts   # Helper functions
├── api/             # API configuration
│   └── endpoints.ts # API endpoints
├── storage/         # Storage utilities
│   └── localStorage.ts # localStorage wrapper
└── README.md        # Documentation
```

## Cách sử dụng

### Trong Web App (React):
```typescript
import { User, Medicine } from '@/shared/types/user';
import { medicineSchema } from '@/shared/utils/validation';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
```

### Trong Mobile App (React Native):
```typescript
import { User, Medicine } from './src/shared/types/user';
import { medicineSchema } from './src/shared/utils/validation';
import { API_ENDPOINTS } from './src/shared/api/endpoints';
```

## Đồng bộ giữa 2 repo

1. **Git Submodule**: Thêm shared code như submodule
2. **NPM Package**: Publish shared code lên private NPM
3. **Copy Files**: Sync files bằng script tự động

## Guidelines

- ✅ Chỉ chứa logic business, types, constants
- ✅ Không chứa UI components
- ✅ Không dependencies platform-specific  
- ✅ Sử dụng vanilla JavaScript/TypeScript
- ❌ Không import React/React Native components
- ❌ Không sử dụng platform APIs
